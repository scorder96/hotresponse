import { useEffect, useState } from "react";
import NavbarIn from "./components/NavbarIn";
import {
  ArrowBottomRightIcon,
  ArrowLeftIcon,
  ArrowTopRightIcon,
  CopyIcon,
} from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";
import { Cards } from "./components/Cards";
import { DialogIFrame } from "./components/DialogIFrame";
import { Link, useParams } from "react-router-dom";
import pb from "./pocketbase";
import ActivityDetail from "./components/ActivityDetail";
import { useToast } from "./hooks/use-toast";
import { ToastAction } from "./components/ui/toast";

var feedbacks: Array<string> = [];
var sentiments: Array<string> = [];
var tasks: Array<string> = [];
var taskstodo: Array<string> = [];
var topics: Array<string> = [];
var createdat: Array<string> = [];
var possentiments: number = 0;
var negsentiments: number = 0;
var feedbackids: Array<string> = [];

function Inside() {
  useEffect(() => {
    fetchFeedbacks();
  }, []);
  const { toast } = useToast();
  const params = useParams();
  const [Feedbacks, setFeedbacks] = useState(Array<string>);
  const [Sentiments, setSentiments] = useState(Array<string>);
  const [Tasks, setTasks] = useState(Array<string>);
  const [Taskstodo, setTaskstodo] = useState(Array<string>);
  const [Topics, setTopics] = useState(Array<string>);
  const [Createdat, setCreatedat] = useState(Array<string>);
  const [Possentiments, setPossentiments] = useState(Number);
  const [Negsentiments, setNegsentiments] = useState(Number);
  const [FeedbackIds, setFeedbackIds] = useState(Array<string>);

  async function fetchFeedbacks() {
    const record = await pb.collection("feedbacks").getList(0, 30, {
      sort: "created",
      filter: "project='" + params.projectid + "'",
    });
    for (let i = 0; i < record.items.length; i++) {
      feedbackids = [record.items[i].id, ...feedbackids];
      feedbacks = [record.items[i].feedback, ...feedbacks];
      sentiments = [record.items[i].sentiment, ...sentiments];
      tasks = [record.items[i].task, ...tasks];
      topics = [record.items[i].topic, ...topics];
      createdat = [record.items[i].created, ...createdat];
      if (record.items[i].sentiment == "positive") {
        possentiments++;
      } else if (record.items[i].sentiment == "negative") {
        negsentiments++;
      }
      if (record.items[i].todo == true) {
        taskstodo = [record.items[i].task, ...taskstodo];
      }
    }
    setFeedbackIds(feedbackids);
    setFeedbacks(feedbacks);
    setSentiments(sentiments);
    setTasks(tasks);
    setTaskstodo(taskstodo);
    setTopics(topics);
    setCreatedat(createdat);
    setPossentiments(possentiments);
    setNegsentiments(negsentiments);
    possentiments = 0;
    negsentiments = 0;
    feedbackids = [];
    feedbacks = [];
    sentiments = [];
    tasks = [];
    taskstodo = [];
    topics = [];
    createdat = [];
  }

  const lol =
    "<iframe src='https://hotresponse.xyz/feedback/" +
    params.projectid +
    "' style='height:176px' frameBorder='0'></iframe>";
  function onCopy() {
    navigator.clipboard.writeText(params.projectid ? lol : "");
    toast({
      title: "Copied!",
      description: "Copied the IFrame code to clipboard",
    });
  }
  async function handleRemoveTask(index: number, task: string) {
    await pb
      .collection("feedbacks")
      .update(FeedbackIds[Tasks.indexOf(task)], { todo: false });

    var temptasks = Taskstodo;
    var justincaseundo = [...temptasks];
    temptasks.splice(index, 1);
    setTaskstodo([...temptasks]);
    toast({
      title: "Task completed!",
      description: "Deleted task from to-do list",
      action: (
        <ToastAction altText="undo" onClick={() => undoRemoveTask(justincaseundo, task)}>
          Undo
        </ToastAction>
      ),
    });
  }
  async function undoRemoveTask(justincaseundo: Array<string>, task: string) {
    setTaskstodo([...justincaseundo]);
    await pb
      .collection("feedbacks")
      .update(FeedbackIds[Tasks.indexOf(task)], { todo: true });
  }
  return (
    <>
      <NavbarIn />
      <div className="p-8 px-16">
        <div className="flex justify-between">
          <div>
            <span className="text-6xl font-bold">{Feedbacks.length}</span>
            <span className="font-light ms-4">feedbacks</span>

            <div className="flex mt-4">
              <div className="flex items-center">
                <ArrowTopRightIcon />
                <span className="font-semibold text-green-500 ms-2">{Possentiments}</span>
              </div>
              <div className="flex items-center ms-4">
                <ArrowBottomRightIcon />
                <span className="font-semibold text-red-500 ms-2">{Negsentiments}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <Link to={"/projects"}>
              <Button variant={"secondary"}>
                <ArrowLeftIcon className="me-2" />
                Back
              </Button>
            </Link>
            <div className="space-x-4">
              <DialogIFrame />
              <Button variant={"outline"} onClick={onCopy}>
                <CopyIcon className="me-2" />
                IFrame
              </Button>
            </div>
          </div>
        </div>

        <Cards
          tasks={Taskstodo}
          topics={Topics}
          createdat={Createdat}
          onRemoveTask={handleRemoveTask}
        />
        <ActivityDetail
          feedbacks={Feedbacks}
          sentiments={Sentiments}
          tasks={Tasks}
          topics={Topics}
          createdat={Createdat}
        />
      </div>
    </>
  );
}
export default Inside;

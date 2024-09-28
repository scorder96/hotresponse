import { TaskItem } from "./TaskItem";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineGraph } from "./LineGraph";
import SheetTasks from "@/SheetTasks";

interface Props {
  tasks: Array<string>;
  topics: Array<string>;
  createdat: Array<string>;
  onRemoveTask: (index: number, task: string) => void;
}
var formatteddate: Array<number> = [];
export function Cards({ tasks, topics, createdat, onRemoveTask }: Props) {
  var taskcount = 0; //used to show only three tasks in the task card
  var tasksthere = false;
  var topictracker = [0, 0, 0, 0]; //one array to count for each topic talked about
  for (let i = 0; i < createdat.length; i++) {
    const temp = Date.parse(createdat[i]);
    const ttt = new Date(temp);
    formatteddate[i] = ttt.getDate();
  }

  for (let i = 0; i < topics.length; i++) {
    switch (topics[i]) {
      case "poduct/service":
        topictracker[0]++;
        break;
      case "functionality":
        topictracker[1]++;
        break;
      case "billing":
        topictracker[2]++;
        break;
      case "customer support":
        topictracker[3]++;
        break;
      default:
        break;
    }
  }
  return (
    <div className="grid grid-cols-3 gap-8 mt-8">
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle>Topics</CardTitle>
          <CardDescription>What users are talking about</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              📦 Product/Service
              <span className="float-right font-bold">{topictracker[0]}</span>
            </li>
            <li>
              ⚙️ Functionality
              <span className="float-right font-bold">{topictracker[1]}</span>
            </li>
            <li>
              💵 Billing <span className="float-right font-bold">{topictracker[2]}</span>
            </li>
            <li>
              🎧 Customer Support
              <span className="float-right font-bold">{topictracker[3]}</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle>
            Tasks
            <SheetTasks tasks={tasks} onRemoveTask={onRemoveTask} />
          </CardTitle>
          <CardDescription>To do for significant improvements</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {tasks.map((task, index) => {
              if (task != "" && task != "-" && task != "none" && taskcount < 3) {
                tasksthere = true;
                taskcount++;
                return (
                  <TaskItem key={index} onRemoveTask={() => onRemoveTask(index, task)}>
                    {task}
                  </TaskItem>
                );
              }
            })}
            {tasksthere == false ? "No tasks as of now" : null}
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle>Activity</CardTitle>
          <CardDescription>Feedback collection timeline</CardDescription>
        </CardHeader>
        <CardContent>
          <LineGraph timeline={formatteddate} />
        </CardContent>
      </Card>
    </div>
  );
}

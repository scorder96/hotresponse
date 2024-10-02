import { Mic } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import pb from "@/pocketbase";
import { useParams } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Input } from "./ui/input";

export function Feedback() {
  useEffect(() => {
    fetchComponent();
  }, []);
  const [Feedback, setFeedback] = useState(String);
  const [Title, setTitle] = useState("How to improve our product?");
  const [Color, setColor] = useState("#0f172a");
  const [ButtonPosition, setButtonPosition] = useState("right");
  const [Theme, setTheme] = useState("light");
  const params = useParams();

  var btnclass = "float-right";
  var txtclass = "text-left";
  ButtonPosition == "left" ? (btnclass = "justify-start") : null;
  ButtonPosition == "center" ? (btnclass = "justify-center") : null;
  ButtonPosition == "right" ? (btnclass = "justify-end") : null;
  ButtonPosition == "center" ? (txtclass = "text-center") : null;
  async function fetchComponent() {
    const record = await pb
      .collection("components")
      .getFirstListItem("project='" + params.projectid + "'");
    setTitle(record.title);
    setButtonPosition(record.position);
    setTheme(record.theme);
    setColor(record.color);
  }

  async function onFeedback() {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" },
      systemInstruction:
        "I'm collecting feedback from users that visit my site or use my site. I'll send you the feedback i received. The JSON output should have 2 properties 1) 'sentiment' - 'positive', 'negative', or 'neutral'. 2) 'task' - turn the feedback into an actionable task, only if this feedback requires a task to be done. If not, return '-', 3) 'topic' - 'product/service', 'functionality', 'billing', or 'customer support'",
    });
    const prompt = Feedback;
    const result = await model.generateContent(prompt);
    const jsonversion = JSON.parse(result.response.text());

    const data = {
      project: params.projectid,
      feedback: Feedback,
      sentiment: jsonversion.sentiment,
      task: jsonversion.task,
      todo: true,
      topic: jsonversion.topic,
    };

    await pb.collection("feedbacks").create(data);

    localStorage.setItem("fback-done", "true");
    localStorage.setItem("fback-message", Feedback);
    localStorage.setItem("fback-sentiment", jsonversion.sentiment);
    localStorage.setItem("fback-task", jsonversion.task);
    localStorage.setItem("fback-topic", jsonversion.topic);
  }
  return (
    <div className={Theme}>
      <div className="dark:bg-black dark:text-white">
        <h1 className={"text-2xl " + txtclass}>{Title}</h1>
        <div className="flex my-4 justify-end">
          <Button variant={"outline"}>
            <Mic />
          </Button>
          <Input
            className="focus-visible:ring-slate-900"
            onChange={(e) => setFeedback(e.target.value)}
            value={Feedback}
            placeholder="A feedback or suggestion"
            required
          />
        </div>
        <div className={"flex " + btnclass}>
          <Button style={{ backgroundColor: "" + Color }} onClick={onFeedback}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

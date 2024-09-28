import { Mic } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import pb from "@/pocketbase";
import { useParams } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";

export function Feedback() {
  const [Feedback, setFeedback] = useState(String);
  const params = useParams();

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
    // <div className="flex justify-center items-center h-screen">
    <div>
      <h1 className="text-2xl">How can we improve our product?</h1>
      <div className="flex my-4">
        <Button variant={"outline"}>
          <Mic />
        </Button>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-gray-300 rounded w-full h-100 p-1 outline-none focus:border-gray-600"
          onChange={(e) => setFeedback(e.target.value)}
          value={Feedback}
          placeholder="A feedback or suggestion"
          required
        />
      </div>
      <Button className="float-right" onClick={onFeedback}>
        Submit
      </Button>
    </div>
    // </div>
  );
}

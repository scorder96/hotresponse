import { Mic } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

interface Props {
  title: string;
  buttonposition: number;
  theme: number;
  color: String;
}
export function FeedbackPreview({ buttonposition, title, theme, color }: Props) {
  var btnclass = "float-right";
  var txtclass = "text-left";
  var themeclass = "bg-white text-black";
  buttonposition == 0 ? (btnclass = "justify-start") : null;
  buttonposition == 1 ? (btnclass = "justify-center") : null;
  buttonposition == 2 ? (btnclass = "justify-end") : null;
  buttonposition == 1 ? (txtclass = "text-center") : null;
  theme == 1 ? (themeclass = "dark") : null;

  const [Feedback, setFeedback] = useState(String);
  return (
    <div className={themeclass}>
      <div className="dark:bg-black dark:text-white">
        <h1 className={"text-2xl " + txtclass}>{title}</h1>
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
          <Button
            className="text-slate-50 hover:bg-slate-900/90"
            style={{ backgroundColor: "" + color }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

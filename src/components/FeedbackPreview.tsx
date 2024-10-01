import { Mic } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

interface Props {
  title: string;
  buttonposition: string;
  theme: string;
  color: String;
}
export function FeedbackPreview({ buttonposition, title, theme, color }: Props) {
  var btnclass = "float-right";
  var txtclass = "text-left";
  buttonposition == "left" ? (btnclass = "justify-start") : null;
  buttonposition == "center" ? (btnclass = "justify-center") : null;
  buttonposition == "right" ? (btnclass = "justify-end") : null;
  buttonposition == "center" ? (txtclass = "text-center") : null;

  const [Feedback, setFeedback] = useState(String);
  return (
    <div className={theme}>
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

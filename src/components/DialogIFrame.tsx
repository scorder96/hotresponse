import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GearIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { FeedbackPreview } from "./FeedbackPreview";
import pb from "@/pocketbase";
import { useParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export function DialogIFrame() {
  useEffect(() => {
    fetchComponent();
  }, []);
  const [Title, setTitle] = useState("How to improve our product?");
  const [Color, setColor] = useState("#0f172a");
  const [ButtonPosition, setButtonPosition] = useState("right");
  const [Theme, setTheme] = useState("light");
  const [CompID, setCompID] = useState(String);
  const params = useParams();

  async function fetchComponent() {
    const record = await pb
      .collection("components")
      .getFirstListItem("project='" + params.projectid + "'");
    setTitle(record.title);
    setButtonPosition(record.position);
    setTheme(record.theme);
    setColor(record.color);
    setCompID(record.id);
  }
  async function saveAndCopy() {
    console.log(CompID);
    const newData = {
      title: Title,
      position: ButtonPosition,
      theme: Theme,
      color: Color,
    };
    await pb.collection("components").update(CompID, newData);
    const lol =
      "<iframe src='http://localhost:5173/feedback/" +
      params.projectid +
      "' style='height:144px; width:100%; border:none'></iframe>";
    navigator.clipboard.writeText(params.projectid ? lol : "");
    toast({
      title: "Copied!",
      description: "Copied the IFrame code to clipboard",
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <GearIcon className="me-2" />
          Component
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <div className="grid grid-cols-2 gap-8">
          <FeedbackPreview
            title={Title}
            buttonposition={ButtonPosition}
            theme={Theme}
            color={Color}
          />
          <div className="space-y-4">
            <DialogHeader>
              <DialogTitle>Component settings</DialogTitle>
              <DialogDescription>
                Make changes to your IFrame and page here.
              </DialogDescription>
            </DialogHeader>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant={"outline"}
                className={ButtonPosition == "left" ? "border-2 border-orange-200" : ""}
                onClick={() => setButtonPosition("left")}
              >
                Left
              </Button>
              <Button
                variant={"outline"}
                className={ButtonPosition == "center" ? "border-2 border-orange-200" : ""}
                onClick={() => setButtonPosition("center")}
              >
                Center
              </Button>
              <Button
                variant={"outline"}
                className={ButtonPosition == "right" ? "border-2 border-orange-200" : ""}
                onClick={() => setButtonPosition("right")}
              >
                Right
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant={"outline"}
                className={Theme == "light" ? "border-2 border-orange-200" : ""}
                onClick={() => {
                  setTheme("light");
                  setColor("#000000");
                }}
              >
                Light
              </Button>
              <Button
                variant={"outline"}
                className={Theme == "dark" ? "border-2 border-orange-200" : ""}
                onClick={() => {
                  setTheme("dark");
                  setColor("#ffffff");
                }}
              >
                Dark
              </Button>
            </div>
            <div>
              <Label htmlFor="color">Accent Color</Label>
              <Input
                type="color"
                id="color"
                className="w-1/4"
                value={Color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
            {/* <Button variant={"secondary"} className="w-full">
              <Crown className="me-2" />
              More options
            </Button> */}
            <DialogFooter>
              <DialogClose asChild>
                <Button className="mt-4" onClick={saveAndCopy}>
                  Save and copy
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

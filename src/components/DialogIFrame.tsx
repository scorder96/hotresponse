import { Button } from "@/components/ui/button";
import {
  Dialog,
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
import { useState } from "react";
import { Crown } from "lucide-react";
import { FeedbackPreview } from "./FeedbackPreview";

export function DialogIFrame() {
  const [Title, setTitle] = useState("How to improve our product?");
  const [Color, setColor] = useState("#0f172a");
  const [ButtonPosition, setButtonPosition] = useState(2);
  const [Theme, setTheme] = useState(0);
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
                className={ButtonPosition == 0 ? "border-2 border-orange-200" : ""}
                onClick={() => setButtonPosition(0)}
              >
                Left
              </Button>
              <Button
                variant={"outline"}
                className={ButtonPosition == 1 ? "border-2 border-orange-200" : ""}
                onClick={() => setButtonPosition(1)}
              >
                Center
              </Button>
              <Button
                variant={"outline"}
                className={ButtonPosition == 2 ? "border-2 border-orange-200" : ""}
                onClick={() => setButtonPosition(2)}
              >
                Right
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant={"outline"}
                className={Theme == 0 ? "border-2 border-orange-200" : ""}
                onClick={() => setTheme(0)}
              >
                Light
              </Button>
              <Button
                variant={"outline"}
                className={Theme == 1 ? "border-2 border-orange-200" : ""}
                onClick={() => setTheme(1)}
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
            <Button variant={"secondary"} className="w-full">
              <Crown className="me-2" />
              More options
            </Button>
            <DialogFooter>
              <Button className="mt-4">Save and copy</Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

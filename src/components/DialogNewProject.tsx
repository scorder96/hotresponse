import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import pb from "@/pocketbase";
import { useNavigate } from "react-router-dom";

interface Props {
  projectsno: number;
}

export function DialogNewProject({ projectsno }: Props) {
  const [ProjectName, setProjectName] = useState(String);
  const navigate = useNavigate();
  async function createProject() {
    const data = {
      user: pb.authStore.model?.id,
      name: ProjectName,
    };
    const newProject = await pb.collection("projects").create(data);
    const defaultComponent = {
      project: newProject.id,
      title: "How to improve our product?",
      position: "right",
      theme: "light",
      color: "#000000",
    };
    await pb.collection("components").create(defaultComponent);
    navigate(newProject.id);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircledIcon className="me-2" /> New project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {projectsno < 3 ? (
          <>
            <DialogHeader>
              <DialogTitle>Create new project</DialogTitle>
              <DialogDescription>
                Give it a sweet name. Make sure you can identify it later.
              </DialogDescription>
            </DialogHeader>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={ProjectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-between">
              <DialogClose asChild>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button onClick={createProject}>Create</Button>
              </DialogClose>
            </div>
          </>
        ) : (
          "Beta Version - Cannot create more projects"
        )}
      </DialogContent>
    </Dialog>
  );
}

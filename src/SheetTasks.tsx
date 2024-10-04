import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TaskItem } from "./components/TaskItem";

interface Props {
  tasks: Array<string>;
  onRemoveTask: (index: number, task: string) => void;
}
function SheetTasks({ tasks, onRemoveTask }: Props) {
  var tasksthere = false;
  return (
    <Sheet>
      <SheetTrigger className="text-sm float-right text-orange-500 underline">
        See all
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>All tasks</SheetTitle>
          <SheetDescription>
            All actionable tasks generated from feedbacks
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <ul className="space-y-4">
            {tasks.map((task, index) => {
              if (task != "" && task != "-" && task != "none") {
                tasksthere = true;
                return (
                  <TaskItem key={index} onRemoveTask={() => onRemoveTask(index, task)}>
                    {task}
                  </TaskItem>
                );
              }
            })}
            {tasksthere == false ? "No tasks as of now" : null}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default SheetTasks;

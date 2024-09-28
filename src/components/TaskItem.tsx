"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
  onRemoveTask: () => void;
}
export function TaskItem({ children, onRemoveTask }: Props) {
  const [Checked, setChecked] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked(false); // Uncheck immediately
    }
  };
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onClick={onRemoveTask}
        onChange={() => handleCheckboxChange}
        checked={Checked}
      />
      <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {children}
      </label>
    </div>
  );
}

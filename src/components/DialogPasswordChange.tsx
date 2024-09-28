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
import pb from "@/pocketbase";
import { FormEvent, useState } from "react";

export function DialogPasswordChange() {
  const [Password, setPassword] = useState(String);
  const [PasswordConfirm, setPasswordConfirm] = useState(String);
  const [PasswordAdvice, setPasswordAdvice] = useState(Boolean);

  async function pwdChange(event: FormEvent) {
    event.preventDefault();
    let oldAuth = pb.authStore.model;
    await pb.collection("users").requestVerification(pb.authStore.model?.email);
    await pb
      .collection("users")
      .confirmPasswordReset("{TOKEN}", Password, PasswordConfirm);
    await pb.collection("users").authWithPassword(oldAuth!.email, "NEW_PASSWORD");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Reset Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogDescription>
            Make changes to your password here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => pwdChange(e)} className="flex flex-col">
          <label htmlFor="password" className="font-medium text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-300 rounded w-full mb-2 p-1 outline-2 focus:outline focus:outline-violet-200"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            onFocus={() => setPasswordAdvice(true)}
            required
          />
          {PasswordAdvice && (
            <span className="text-sm font-light -mt-2 mb-2">
              Your password must contain 8 or more characters.
            </span>
          )}

          <label htmlFor="passwordconfirm" className="font-medium text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            name="passwordconfirm"
            id="passwordconfirm"
            className="border border-gray-300 rounded w-full mb-2 p-1 outline-2 focus:outline focus:outline-violet-200"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={PasswordConfirm}
            required
          />
          <DialogFooter>
            <Button type="submit" formAction="submit" className="mt-4">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { HeadphonesIcon } from "lucide-react";
import pb from "../pocketbase";
import NavbarIn from "./NavbarIn";
import { Button } from "./ui/button";
import { DialogPasswordChange } from "./DialogPasswordChange";
import { Link } from "react-router-dom";

export function Account() {
  return (
    <>
      <NavbarIn />
      <div className="p-8 px-16">
        <h1 className="text-4xl font-bold">Account</h1>
        <hr className="my-8" />
        <div className="grid grid-cols-2">
          <span className="font-semibold">Username</span>
          <span>{pb.authStore.model?.username}</span>
        </div>
        <hr className="my-8" />
        <div className="grid grid-cols-2">
          <span className="font-semibold">Email address</span>
          <div>
            <span>{pb.authStore.model?.email}</span>
          </div>
        </div>
        <hr className="my-8" />
        <div className="grid grid-cols-2">
          <span className="font-semibold">Password</span>
          <div className="w-1/4">
            <DialogPasswordChange />
          </div>
        </div>
        <hr className="my-8" />
        <div className="grid grid-cols-2">
          <span className="font-semibold">Created at</span>
          <span>{pb.authStore.model?.created}</span>
        </div>
        <hr className="my-8" />
        <div className="flex space-x-4">
          <Link to={"/support"}>
            <Button>
              <HeadphonesIcon className="me-2 size-4" />
              Support
            </Button>
          </Link>
          <Button variant={"destructive"} onClick={() => pb.authStore.clear()}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}

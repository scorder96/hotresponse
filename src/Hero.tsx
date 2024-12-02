import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-center p-32">
      <div className="w-full flex justify-center">
        <button
          type="button"
          className="flex items-center bg-gradient-to-br from-slate-700 to-slate-800 text-white p-1 px-3 rounded-full"
        >
          <TwitterLogoIcon className="me-2" />
          <span className="text-sm font-semibold">Follow on X</span>
        </button>
      </div>

      <h1 className="text-5xl font-extrabold my-4">
        Collect{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
          feedback
        </span>{" "}
        to polish your SaaS to perfection.
      </h1>
      <h2 className="text-xl font-light mx-32">
        Your MVP has one purpose. To collect feedback. Let us do it right.
      </h2>
      <Link to={"signup"}>
        <Button className="my-8 px-12">Get Started</Button>
      </Link>
    </div>
  );
}
export default Hero;

import { useState } from "react";
import { Button } from "./ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import pb from "@/pocketbase";
import { useNavigate } from "react-router-dom";

function EmailVerify() {
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(String);
  const navigate = useNavigate();

  async function verify() {
    setError("");
    setLoading(true);
    const user = await pb.collection("users").getOne(pb.authStore.model?.id);
    setLoading(false);
    if (user.verified) {
      navigate("/projects");
    } else {
      setError("Please check again");
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center shadow-2xl rounded-xl w-1/3 p-8">
        {/* <h1 className="text-2xl mb-4">Email Verification</h1> */}
        <h1 className="text-xl text-center font-medium">Verify your email</h1>
        {/* <span className="text-center text-sm font-light mt-2 mb-4">
          Please verify your email to continue.
        </span> */}
        <span className="my-4 text-center">
          We sent you an email with a link. <br />
          If you can't find it, please check spam.
        </span>
        <Button type="submit" onClick={verify} disabled={Loading}>
          {Loading ? "Loading" : "I have verified"}
        </Button>
        {Error && (
          <div className="flex items-center justify-center space-x-2 mt-4">
            <ExclamationTriangleIcon color="red" />
            <span className="text-red-500">{Error}</span>
          </div>
        )}
        {/* <Link to={"/projects"}> */}
        {/* <button className="bg-lime-200 p-2 rounded mt-4">Continue</button> */}
        {/* <Button className="mt-4 w-full">Continue</Button> */}
        {/* </Link> */}
      </div>
    </div>
  );
}
export default EmailVerify;

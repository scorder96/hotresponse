import { FormEvent, useState } from "react";
import pb from "../pocketbase";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

function Login() {
  const [Email, setEmail] = useState(String);
  const [Password, setPassword] = useState(String);
  const [Error, setError] = useState(String);
  const [Loading, setLoading] = useState(false);
  var navigate = useNavigate();

  async function logIn(event: FormEvent) {
    setError("");
    setLoading(true);
    event.preventDefault();
    await pb
      .collection("users")
      .authWithPassword(Email, Password)
      .catch((err) => setError(err.message));
    setLoading(false);
    pb.authStore.isValid && navigate("/projects");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center shadow-2xl rounded-xl w-1/3 p-8">
        <h1 className="text-xl text-center font-medium">Sign in to HotResponse</h1>
        <span className="text-center text-sm font-light mt-2 mb-4">
          Welcome back! Please sign in to continue
        </span>
        <form onSubmit={(e) => logIn(e)}>
          <label htmlFor="email" className="font-medium text-sm">
            Email
          </label>

          <Input type="email" onChange={(e) => setEmail(e.target.value)} value={Email} />

          <label htmlFor="password" className="font-medium text-sm">
            Password
          </label>

          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
          {Error && (
            <div className="flex items-center space-x-2 mt-4">
              <ExclamationTriangleIcon color="red" />
              <span className="text-red-500">{Error}</span>
            </div>
          )}
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white p-2 rounded w-full mt-4"
            formAction="submit"
          >
            {Loading ? "Loading" : "Continue"}
          </button>
        </form>
        <span className="text-center text-sm font-light mt-4">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-orange-500 font-medium">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Login;

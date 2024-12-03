import { FormEvent, useEffect, useState } from "react";
import pb from "../pocketbase";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";

function Signup() {
  useEffect(() => {
    authenticate();
  }, []);
  const [Email, setEmail] = useState(String);
  const [Password, setPassword] = useState(String);
  const [PasswordConfirm, setPasswordConfirm] = useState(String);
  const [PasswordAdvice, setPasswordAdvice] = useState(Boolean);
  const [Error, setError] = useState(String);
  const [Loading, setLoading] = useState(false);
  var navigate = useNavigate();
  async function authenticate() {
    pb.authStore.isValid && navigate("/projects");
  }
  async function signUp(event: FormEvent) {
    setError("");
    setLoading(true);
    const data = {
      email: Email,
      emailVisibility: true,
      password: Password,
      passwordConfirm: PasswordConfirm,
    };
    event.preventDefault();
    const recordcreate = await pb
      .collection("users")
      .create(data)
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    if (recordcreate) {
      const record = await pb
        .collection("users")
        .authWithPassword(Email, Password)
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
      if (record) {
        await pb
          .collection("users")
          .requestVerification(Email)
          .then(() => {
            navigate("/emailverify");
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }
    }
    setLoading(false);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center shadow-2xl rounded-xl w-1/3 p-8">
        <h1 className="text-xl text-center font-medium">Create your account</h1>
        <span className="text-center text-sm font-light mt-2 mb-4">
          Welcome! Please fill in the details to get started.
        </span>
        <form onSubmit={(e) => signUp(e)}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            className="mb-2 focus:mb-0"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            onFocus={() => setPasswordAdvice(true)}
            onBlur={() => setPasswordAdvice(false)}
          />
          {PasswordAdvice && (
            <span className="text-sm font-light block">
              Your password must contain 8 or more characters.
            </span>
          )}
          <Label htmlFor="passwordconfirm">Confirm Password</Label>
          <Input
            type="password"
            id="passwordconfirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={PasswordConfirm}
          />
          {Error && (
            <div className="flex items-center space-x-2 mt-4">
              <ExclamationTriangleIcon color="red" />
              <span className="text-red-500">{Error}</span>
            </div>
          )}
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white p-2 rounded w-full mt-4"
            disabled={Loading}
            formAction="submit"
          >
            {Loading ? "Loading" : "Continue"}
          </button>
        </form>
        <span className="text-center text-sm font-light mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-orange-500 font-medium">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Signup;

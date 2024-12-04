import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-orange-400 grid grid-cols-3 mt-8 px-16 py-8">
      <div className="text-xl">
        <Link to={"/"}>
          <span className="text-xl text-orange-500 font-bold">HotResponse🔥</span>
        </Link>
      </div>
      <div>
        <h3 className="text-lg mb-4 font-semibold">Account</h3>
        <Link to={"signup"} className="hover:text-orange-500">
          Sign Up
        </Link>
        <br />
        <Link to={"login"} className="hover:text-orange-500">
          Log In
        </Link>
        <br />
        <Link to={"account"} className="hover:text-orange-500">
          Account
        </Link>
      </div>
      <div>
        <h3 className="text-lg mb-4 font-semibold">Navigate</h3>
        <Link to={"/"} className="hover:text-orange-500">
          Home
        </Link>
        <br />
        <Link to={"pricing"} className="hover:text-orange-500">
          Pricing
        </Link>
        <br />
        <Link to={"support"} className="hover:text-orange-500">
          Support
        </Link>
      </div>
      <p className="text-center mt-8 col-span-3">&copy; 2024 HotResponse</p>
    </footer>
  );
}

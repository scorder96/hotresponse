import { Link } from "react-router-dom";

interface Props {
  onLogIn: () => void;
}

function Navbar({ onLogIn }: Props) {
  return (
    <nav className="w-full shadow px-8 flex items-center justify-between py-4">
      <div>
        <Link to={"/"}>
          <span className="text-xl text-orange-500 font-bold">HotResponse🔥</span>
        </Link>
      </div>
      <div className="hidden md:flex md:items-center cursor-pointer">
        <span className="hover:text-orange-500 px-4" onClick={onLogIn}>
          Log In
        </span>
        <Link to="/pricing">
          <span className="hover:text-orange-500 px-4">Pricing</span>
        </Link>
        <span className="hover:text-orange-500 px-4">Contact Us</span>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

function NavbarIn() {
  return (
    <nav className="w-full shadow px-4 flex items-center justify-between py-4">
      <div>
        <Link to={"/"}>
          <span className="text-xl text-orange-500 font-bold">HotResponse🔥</span>
        </Link>
      </div>
      <div className="hidden md:flex md:items-center cursor-pointer">
        <Link to="/pricing">
          <span className="hover:text-orange-500 px-4">Upgrade</span>
        </Link>
        <Link to={"/account"}>
          <span className="hover:text-orange-500 px-4">Account</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarIn;

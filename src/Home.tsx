import Navbar from "./components/Navbar";
import Hero from "./Hero";
import { Link, useNavigate } from "react-router-dom";
import { Pricing } from "./Pricing";
import Outcomes from "./Outcomes";
import { FireTrail } from "./FireTrail";
import { Button } from "./components/ui/button";

function Home() {
  var navigate = useNavigate();
  return (
    <>
      <Navbar
        onLogIn={() => {
          navigate("login");
        }}
      />
      <div className="text-center py-2 bg-orange-200 absolute w-full">
        This software is <b>under development</b> and is not ready for release.
      </div>
      <Hero />
      <FireTrail />
      <section className="flex justify-center pb-16">
        <h2 className="text-2xl text-center py-16 leading-loose text-decoration-line">
          I appreciate you visiting my site.
          <br />I wish I could know what you think and feel about this.
          <hr className="border-2 border-orange-200" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            I'm sure you can relate.
          </span>
          <br />
          So I built <i className="text-orange-500 font-bold">HOTRESPONSE🔥</i>
        </h2>
      </section>
      <Outcomes />
      <Pricing />
      <section className="py-16 flex flex-col items-center">
        <h2 className="text-4xl text-center font-bold mb-8">Why the wait?</h2>
        <Link to={"signup"}>
          <Button className="my-8 px-12">Get Started</Button>
        </Link>
      </section>
      <footer className="border-t-2 border-orange-400 grid grid-cols-3">
        <div className="p-8 text-xl">
          <Link to={"/"}>
            <span className="text-xl text-orange-500 font-bold">HotResponse🔥</span>
          </Link>
        </div>
        <div className="p-8">
          <h3 className="text-xl mb-4 font-bold">Account</h3>
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
        <div className="p-8">
          <h3 className="text-xl mb-4 font-bold">Navigate</h3>
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
      </footer>
    </>
  );
}
export default Home;

import Navbar from "./components/Navbar";
import Hero from "./Hero";
import { Link, useNavigate } from "react-router-dom";
import { Pricing } from "./Pricing";
import Outcomes from "./Outcomes";
import { FireTrail } from "./FireTrail";
import { Button } from "./components/ui/button";
import Footer from "./Footer";

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
      <section className="flex justify-center py-16">
        <h2 className="text-2xl text-center leading-loose text-decoration-line">
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
      <div className="px-32 py-16">
        <img
          src="/screenshot.png"
          alt="screenshot of the hotresponse dashboard"
          className="shadow-lg"
        />
      </div>
      <Outcomes />
      <Pricing />
      <section className="py-16 flex flex-col items-center">
        <h2 className="text-4xl text-center font-bold mb-8">Why the wait?</h2>
        <Link to={"signup"}>
          <Button className="my-8 px-12">Get Started</Button>
        </Link>
      </section>
      <Footer />
    </>
  );
}
export default Home;

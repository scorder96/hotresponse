import Navbar from "./components/Navbar";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
import { Pricing } from "./Pricing";
import Outcomes from "./Outcomes";
import { FireTrail } from "./FireTrail";

function Home() {
  var navigate = useNavigate();
  return (
    <>
      <Navbar
        onLogIn={() => {
          navigate("login");
        }}
      />
      <Hero />
      <FireTrail />
      <div className="flex justify-center pb-16">
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
      </div>
      <Outcomes />
      <Pricing />
    </>
  );
}
export default Home;

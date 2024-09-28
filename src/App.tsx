import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import EmailVerify from "./components/EmailVerify";
import Inside from "./Inside";
import NotFound from "./NotFound";
import Login from "./components/Login";
import Home from "./Home";
import { Account } from "./components/Account";
import { Feedback } from "./components/Feedback";
import AllProjects from "./components/AllProjects";
import { Toaster } from "./components/ui/toaster";
import Support from "./components/Support";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="emailverify" element={<EmailVerify />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="projects/:projectid" element={<Inside />} />
          <Route path="account" element={<Account />} />
          <Route path="feedback" element={<NotFound />} />
          <Route path="feedback/:projectid" element={<Feedback />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;

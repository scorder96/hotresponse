import { useState } from "react";
import NavbarIn from "./NavbarIn";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function Support() {
  const [Message, setMessage] = useState(String);

  function onSend() {}
  return (
    <>
      <NavbarIn />
      <div className="p-8 px-16">
        <h1 className="text-4xl font-bold">Support</h1>
        <div className="mt-8">
          <Textarea
            placeholder="Type your message here."
            value={Message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button className="mt-4" onClick={onSend}>
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
export default Support;

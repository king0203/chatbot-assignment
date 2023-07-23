import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../components/MessageParser";
import ActionProvider from "../components/ActionProvider";
import config from "../components/config";
import "react-chatbot-kit/build/main.css";

import React from "react";
import { useState } from "react";

const Chat = () => {
  const [Open, setOpen] = useState(false);
  
  return (
    <>
      {!Open && (
        <div>
          <h1 className="text-7xl text-center bg-black">
            Enter into Student Info System
          </h1>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full"
          >
            Enroll Now!
          </button>
        </div>
      )}

      {Open && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </>
  );
};

export default Chat;

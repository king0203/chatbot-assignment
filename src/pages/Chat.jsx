import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../components/MessageParser";
import ActionProvider from "../components/ActionProvider";
import config from "../components/config";
import "react-chatbot-kit/build/main.css";
import React from "react";

const Chat = () => {

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className=" border-2 border-black">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default Chat;

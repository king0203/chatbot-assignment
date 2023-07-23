import { createChatBotMessage } from "react-chatbot-kit";
import GotIt from "./GotIt/GotIt.jsx";
import Age from "./Age/Age.jsx";

const config = {
  botName: "Student Info System Bot",
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system", {
      widget: "gotIt",
    }),
  ],
  widgets: [
    {
      widgetName: "gotIt",
      delay: 3000,
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: "Age",
      widgetFunc: (props) => <Age {...props} />,
    },
  ],
};

export default config;

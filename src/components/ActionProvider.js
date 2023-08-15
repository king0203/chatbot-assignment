import { useDispatch } from "react-redux";
import { addAge, addName } from "../redux/slice";
import { useNavigate } from "react-router-dom";

class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
    
  }
  dispatch = useDispatch();
  navigate = useNavigate();
  handleGotIt = () => {
    const botMessage = this.createChatBotMessage("Enter your Name", {});

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  handleInput = (age) => {
    this.setState((prev) => {
      let botMessage;

      if (prev.messages[prev.messages.length - 2].message === "Enter your Name") {
        this.dispatch(addName(prev.messages[prev.messages.length - 1].message));
        botMessage = this.createChatBotMessage("Enter your Age", {
          widget: "Age",
        });
      } else if (age) {
        this.dispatch(addAge(age.toString()));
        botMessage = this.createChatBotMessage("Thank you. In 5 seconds, bot will exit.", {});
        setTimeout(() => {
          this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, this.createChatBotMessage("Chat completed.", {})],
          }));
          this.navigate("/done");
        }, 5000);
        
      } else {
        return prev;
      }

      return {
        ...prev,
        messages: [...prev.messages, botMessage],
      };
    });
  };
}

export default ActionProvider;
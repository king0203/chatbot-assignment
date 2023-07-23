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

  handleUserInput = (age) => {
    this.setState((prev) => {
      let botMessage;

      // Check if the previous message is asking for the user's name
      if (prev.messages[prev.messages.length - 2].message === "Enter your Name") {
        this.dispatch(addName(prev.messages[prev.messages.length - 1].message));
        // If the previous message was asking for the name, then create a new message
        // asking for the user's age with the "ageDropdown" widget
        botMessage = this.createChatBotMessage("Enter your Age", {
          widget: "Age",
        });
      } else if (age) {
        this.dispatch(addAge(age.toString()));

        // If the age is provided (not null or empty), then create a new message
        // thanking the user and informing that the bot will exit in 5 seconds

        botMessage = this.createChatBotMessage("Thank you. In 5 seconds, bot will exit.", {});
        setTimeout(() => {
          this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, this.createChatBotMessage("Chat completed.", {})],
          }));
          // Navigate to the success page
          this.navigate("/success");
        }, 300);
        
      } else {
        // If the age is null or empty (not provided), then return the previous state
        // so that the bot will ask for the age again
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
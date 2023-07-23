class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if (message.toLowerCase().includes("got it!")) {
        this.actionProvider.handleGotIt();
      } else {
        this.actionProvider.handleInput();
      }
    }
  }

export default MessageParser;
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Done from "./pages/Done";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
}

export default App;

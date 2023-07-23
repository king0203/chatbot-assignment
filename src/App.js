import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Success from "./pages/Success";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;

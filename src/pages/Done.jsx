import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Done = () => {
  // Use useSelector to select the 'name' and 'age' from the 'bot' state
  const name = useSelector((state) => state.botReducer.name);
  const age = useSelector((state) => state.botReducer.age);

  // If the name is empty, navigate back to the homepage
  if (age === null) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-white h-screen flex justify-center items-center	">
      <div className="bg-cyan-100 rounded-sm	h-96 w-72 flex flex-col justify-center items-center text-2xl p-4">
      Your name {name} aged {age} has been added to student
      system. You may now exit.</div>
    </div>
  );
};

export default Done;

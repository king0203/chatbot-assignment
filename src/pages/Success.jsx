import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Success = () => {
  // Use useSelector to select the 'name' and 'age' from the 'bot' state
  const name = useSelector((state) => state.botReducer.name);
  const age = useSelector((state) => state.botReducer.age);

  // If the name is empty, navigate back to the homepage
  if (age === null) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      Your name {name.toUpperCase()} aged {age} has been added to student
      system. You may now exit.
    </div>
  );
};

export default Success;

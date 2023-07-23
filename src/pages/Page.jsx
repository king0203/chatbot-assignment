import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate();

  const handleEnrollNowClick = () => {
    navigate('/chat');
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-cyan-100 rounded-sm h-96 w-72 flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl text-center">Enter into Student Info System</h1>
        <button
          onClick={handleEnrollNowClick}
          className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Enroll Now!
        </button>
      </div>
    </div>
  );
};

export default Page;

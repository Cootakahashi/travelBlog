import { useState } from "react";

const Question = ({ prop }) => {
  const [question, answer] = Object.values(prop);
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked((current) => !current);
  };
  return (
    <>
      <li
        className="flex shadow shadow-neutral-400 items-center w-full py-10 justify-center"
        onClick={handleToggle}
      >
        <h4 className="text-2xl">{question}</h4>
        {clicked ? (
          <>
            <div className="w-10 h-[1px] m-1 bg-zinc-900 rotate-45 absolute right-16 transition-all"></div>
            <div className="w-10 h-[1px] m-1 bg-zinc-900 absolute -rotate-45 right-16 transition-all"></div>
          </>
        ) : (
          <>
            <div className="w-10 h-[1px] m-1 bg-zinc-900 rotate-90 absolute right-16 transition-all"></div>
            <div className="w-10 h-[1px] m-1 bg-zinc-900 absolute right-16 transition-all"></div>
          </>
        )}
      </li>
      {clicked ? (
        <li className="list-none shadow shadow-neutral-400 items-center w-full py-10 justify-center text-center px-10 animate-moving">
          {answer}
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default Question;

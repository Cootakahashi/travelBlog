import { useState } from "react";

const Question = ({ prop }) => {
  const [question, answer] = Object.values(prop);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    setIsOpen((current) => !current);
    if (e.currentTarget.classList.contains("open")) {
      e.currentTarget.classList.remove("open");
    } else {
      e.currentTarget.classList.add("open");
    }
  };

  return (
    <>
      <li className="flex shadow shadow-neutral-400 w-full py-10">
        <div className="flex items-center justify-center w-full">
          <h4 className="text-2xl grow text-center">{question}</h4>
          <div className="cursor-pointer faq" onClick={handleToggle}>
            <div className="rotate-90 w-10 h-[1px] m-1 bg-zinc-900 faq-open:rotate-45 transition-all relative top-1"></div>
            <div className="w-10 h-[1px] m-1 bg-zinc-900 faq-open:-rotate-45 transition-all "></div>
          </div>
          <div className="basis-1/12"></div>
        </div>
      </li>
      <li
        className={
          isOpen
            ? "shadow shadow-neutral-400 w-full py-10 transition duration-500 text-center"
            : "transition text-center opacity-0 h-0"
        }
      >
        {answer}
      </li>
    </>
  );
};

export default Question;

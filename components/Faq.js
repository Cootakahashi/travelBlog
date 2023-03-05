import Question from "./Question";

const Faq = () => {
  const questions = [
    "Spending money in Thailand for 2 weeks ?",
    "Do I need a visa to go to Thailand ?",
    "Can I speak English in Thailand ?",
  ];
  return (
    <>
      <h2 className="text-center p-2 font-medium text-5xl mb-16">FAQ'S</h2>
      <div className="flex flex-col justify-center items-center w-[69.5%] mx-auto relative">
        {questions.map((q) => (
          <>
            <div className="flex shadow shadow-neutral-400 items-center w-full py-10 justify-center ">
              <Question prop={q} />
              <div className="flex absolute right-[6%] group">
                <div className="w-10 h-[1px] m-1 bg-zinc-900 absolute rotate-90"></div>
                <div className="w-10 h-[1px] m-1 bg-zinc-900"></div>
              </div>
            </div>
            <div className="hidde shadow shadow-neutral-400 items-center w-full py-10 justify-center"></div>
          </>
        ))}
      </div>
    </>
  );
};

export default Faq;

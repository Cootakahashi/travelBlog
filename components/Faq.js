import Question from "./Question";

const Faq = () => {
  const questions = [
    {
      question: "Spending money in Thailand for 2 weeks ?",
      answer:
        "Traveling in Thailand for two weeks can be quite affordable. Depending on your budget and preferences, you could easily spend anywhere from $500 to $2,000 or more. If you're looking to stay in hostels and eat street food, then it's possible to get by with a budget of around $30-50 per day.",
    },
    {
      question: "Do I need a visa to go to Thailand ?",
      answer:
        "If you wish to stay in Thailand for more than 45 days, or wish to work in Thailand, you need a valid visa, which you must obtain before you travel.",
    },
    {
      question: "Can I speak English in Thailand ?",
      answer:
        "English is a commonly spoken language in Thailand, especially in major cities and tourist areas. While many Thais may not be fluent in English, they are often able to hold basic conversations",
    },
  ];

  return (
    <>
      <h2 className="text-center p-2 font-medium text-5xl mb-16">FAQ'S</h2>
      <ul className="flex flex-col w-[69.5%] mx-auto">
        {questions.map((q, i) => (
          <Question prop={q} key={i} />
        ))}
      </ul>
    </>
  );
};

export default Faq;

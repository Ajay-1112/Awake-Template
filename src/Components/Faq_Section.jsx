import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b cursor-pointer"
      style={{ borderColor: "var(--color-border)" }}
      onClick={handleOpenAnswer}
    >
      <h4
        className="pb-5 flex items-center justify-between text-lg font-medium"
        style={{ color: "var(--color-primary-text)" }}
      >
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "var(--color-tertiary)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "var(--color-tertiary)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="transition-all duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="pb-5" style={{ color: "var(--color-secondary-text)" }}>
            {faqsList.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqsList = [
    {
      q: "How much do your services cost?",
      a: "Our pricing depends on the specific needs of your business. We focus on providing services that deliver measurable value, helping you uncover inefficiencies, reduce costs, and drive growth. Let’s discuss your goals to provide a tailored quote.",
    },
    {
      q: "How can data consulting help my business?",
      a: "Every business generates data, whether it’s sales reports, customer feedback, or operational metrics. We analyze this data to uncover insights, identify growth opportunities, and help you make informed decisions to optimize your operations.",
    },
    {
      q: "Will this take up a lot of my time?",
      a: "Not at all! We streamline the entire process, handling data collection, analysis, and reporting so you can focus on running your business. Our goal is to save you time while providing clear, actionable insights.",
    },
    {
      q: "My business doesn’t use much data. Is this still for me?",
      a: "Absolutely! Even small datasets can reveal valuable insights. We’ll work with whatever information you have to help you understand your business better and achieve your goals.",
    },
    {
      q: "Isn’t data analysis too complicated for my team to handle?",
      a: "We simplify the process, breaking down complex data into clear, actionable steps that are easy to understand and implement. You’ll gain insights without any technical overwhelm.",
    },
    {
      q: "We’ve tried data consulting before, and it didn’t work. Why should we try again?",
      a: "We take a personalized, hands-on approach tailored to your unique business needs. Let’s discuss what didn’t work previously and how we can ensure better results this time.",
    },
    {
      q: "Why should I work with you instead of a larger firm?",
      a: "As a freelance consultant, I provide personalized service, local expertise, and a deep commitment to building long-term relationships. I understand the unique challenges businesses in Hawaii face and work closely with you to achieve your goals.",
    },
    {
      q: "What if we’re not ready to start right now?",
      a: "That’s okay! I offer discovery calls and educational resources to help you understand the value of data analysis. When you’re ready, I’ll be here to guide you.",
    },
    {
      q: "How do you handle sensitive business data?",
      a: "Your data security is a top priority. I follow strict protocols to ensure your information is protected and only used for analysis with your consent.",
    },
    {
      q: "What if I don’t know where to start?",
      a: "You don’t have to! My role is to guide you through the process step by step. We’ll start by understanding your business challenges and goals, then work together to uncover actionable insights.",
    },
  ];


  return (
    <section className="leading-relaxed max-w-screen-xl md:mt-12 mx-auto px-5 md:px-8  rounded-4xl md:p-8" id="Faq">
      <div className="space-y-3 text-center">
        <h1 className="md:text-5xl text-4xl font-semibold" style={{ color: "var(--color-primary-text)" }}>
          Got questions? <br /> We’ve got  <span className="font-instrument-serif font-medium text-secondary-text italic">answers</span>
        </h1>
      </div>
      <div className="mt-20 max-w-6xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

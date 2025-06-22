import React from "react";
import Button from "./Button";

const Pricing_Section = () => {
  const plans = [
    {
      id: "starter",
      label: "Starter",
      price: "$2500",
      note: "/month",
      description:
        "For companies who need design support. One request at a time",
      color: {
        background: "bg-yellow-200",
        text: "text-[var(--color-primary-text)]",
        divider: "bg-[var(--color-primary-text)]/20",
      },
      features: [
        "Design Updates Every 2 Days",
        "Mid-level Designer",
        "SEO optimization",
        "Monthly analytics",
        "2x Calls Per Month",
        "License free assets",
      ],
    },
    {
      id: "pro",
      label: "Pro",
      price: "$3800",
      note: "/month",
      description:
        "2x the speed. Great for an MVP, Web App or complex problem",
      color: {
        background: "bg-blue-500",
        text: "text-white1",
        divider: "bg-white1/20",
      },
      features: [
        "Design Updates Daily",
        "Senior-level Designer",
        "AI Advisory Framework",
        "Full-service Creative Team",
        "4x Calls Per Month",
        "License free assets",
      ],
    },
  ];

  return (
    <>
    <h2 className="md:text-5xl md:pt-10 text-4xl font-semibold text-primary-text text-center md:mb-8">Pick the plan that <br/> fits your <span className="font-instrument-serif font-medium italic text-secondary-text">start-up</span></h2>
    <div className="flex items-center justify-center py-6 ">
      <div className="max-w-7xl px-3 lg:h-82 w-full flex flex-col lg:flex-row gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${plan.color.background} ${plan.color.text} rounded-2xl p-8 md:flex w-full lg:w-1/2`}
          >
            {/* Left */}
            <div className="flex flex-col justify-between md:w-1/2 pr-6">
              <div>
                <span className="text-sm font-semibold px-4 py-1 bg-[var(--color-primary)] text-white1 rounded-full inline-block mb-4">
                  {plan.label}
                </span>
                <p className="text-sm mb-6">{plan.description}</p>
                <h2 className="text-4xl font-bold mb-5 md:mb-0">
                  {plan.price}{" "}
                  <span className="text-base font-medium">{plan.note}</span>
                </h2>
              </div>
              <Button className="bg-black text-white  " />
            </div>

            {/* Divider */}
            <div className={`w-px mt-5 md:mt-0 mx-6 ${plan.color.divider}`} />

            {/* Right */}
            <div className="md:w-1/2">
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="pl-7 md:pl-0  text-sm space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Pricing_Section;
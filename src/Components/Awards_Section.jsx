import React from "react";
import Button from "./Button";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      logo: "F",
      logoStyle: "text-[var(--color-primary)] text-4xl font-bold",
      organization: "Framer Awards",
      title:
        "Celebrated for cutting-edge interaction design and seamless user experiences.",
      year: "2024",
    },
    {
      id: 2,
      logo: "●",
      logoStyle: "text-pink-500 text-4xl",
      organization: "Dribbble Awards",
      title:
        "Recognized for creative excellence and innovative design solutions.",
      year: "2023",
    },
    {
      id: 3,
      logo: "W.",
      logoStyle: "text-[var(--color-primary)] text-4xl font-bold",
      organization: "Awwwards",
      title:
        "Honored with the Best Website Design for creativity and innovation.",
      year: "2022",
    },
  ];

  return (
    <div className="max-w-7xl md:mt-10 mx-auto  ">
      {/* Header */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-dark-text)] mb-4">
          Accolades and achievements <br/>celebration our{" "}
            <span className="italic text-light-text font-instrument-serif">
              design excellence
            </span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-0 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 bg-white1"
            >
              {/* Logo */}
              <div className="mb-6">
                <div className={award.logoStyle}>{award.logo}</div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-[var(--color-light-text)] text-sm font-medium uppercase tracking-wider">
                  {award.organization}
                </p>

                <h3 className="text-[var(--color-dark-text)] text-lg font-semibold leading-snug">
                  {award.title}
                </h3>

                <p className="text-[var(--color-light-text)] text-base font-medium">
                  {award.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-3 md:mx-auto mt-16 py-20 md:py-32 md:px-0 px-3 border  border-border bg-white1 rounded-2xl mb-10 text-center">
        <h2 className=" max-w-5xl mx-auto text-5xl font-semibold text-dark-text text-center">
          Innovative solutions for{" "}
          <span className="font-instrument-serif text-light-text italic">bold brands</span>
        </h2>
        <p className="text-lg text-light-text mt-4 mb-12 max-w-6xl mx-auto">
          Looking to elevate your brand? We craft immersive experiences that
          captivate, engage, and make your business unforgettable in every
          interaction.
        </p>
        <Button text="Get in touch" href="/contact" />
      </div>
    </div>
  );
};

export default AwardsSection;

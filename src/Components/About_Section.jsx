import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const About_Section = () => {
  const skills = [
    {
      id: 1,
      name: "Creativity",
      bgColor: "bg-purple-soft",
      textColor: "text-purple-primary",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Innovation",
      bgColor: "bg-blue-soft",
      textColor: "text-blue-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Strategy",
      bgColor: "bg-orange-soft",
      textColor: "text-orange-primary",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const statistics = [
    { id: 1, number: 40, label: "Projects Completed", hasPlus: true },
    { id: 2, number: 15, label: "Years Of Experience", hasPlus: true },
    { id: 3, number: 12, label: "Design Awards", hasPlus: true },
  ];

  const [startCount, setStartCount] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setStartCount(true);
            setHasAnimated(true); // Prevent future animations
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Slightly delay the trigger
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="about" className="max-w-7xl mx-auto px-6  md:pt-10">
      {/* Skills Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-primary-text mb-8">
          Crafting exceptional, well-experienced & technology-driven strategies
          to drive impactful results with
        </h2>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`${skill.bgColor} ${skill.textColor} px-8 py-4 font-instrument-serif font-medium rounded-full text-4xl italic flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer`}
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div 
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6 max-w-6xl mx-auto"
      >
        {statistics.map((stat, index) => (
          <div
            key={stat.id}
            className={`p-8 border-border transition-all duration-300 hover:-translate-y-1 group ${
              index !== statistics.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div className="text-center">
              <div className="relative mb-4">
                <div className="text-7xl md:text-9xl font-semibold text-primary-text mb-2 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  {stat.hasPlus && (
                    <span className="text-4xl md:text-6xl absolute top-0 md:left-5 left-16 font-normal text-secondary-text ml-2">
                      +
                    </span>
                  )}
                  <span>
                    {startCount ? (
                      <CountUp
                        start={0}
                        end={Number(stat.number)}
                        duration={2}
                        separator=","
                      />
                    ) : (
                      0
                    )}
                  </span>
                </div>
              </div>
              <p className="text-secondary-text text-lg font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About_Section;
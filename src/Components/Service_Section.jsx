import React, { useState } from "react";
import Button from "./Button";
import { Database, ClipboardList, Settings, AreaChart } from "lucide-react";

const Service_Section = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: <>Data Pipeline <span className="md:hidden inline">
        <br />
      </span> Development</>,
      description: "Establishing systems to collect, organize, and manage data efficiently.",
      icon: Database,
      bgColor: "bg-rose-gradient",
      hoverColor: "hover:bg-rose-primary",
    },
    {
      id: 2,
      title: <>Technical Project <span className="md:hidden inline">
        <br />
      </span> Management</>,
      description: "Supporting your system procurement and development project. Supporting your procurement and development projects with strategic oversight to achieve timely results.",
      icon: ClipboardList,
      bgColor: "bg-blue-gradient",
      hoverColor: "hover:bg-secondary",
    },
    {
      id: 3,
      title: <>Business Process <span className="md:hidden inline">
        <br />
      </span> Optimization</>,
      description: "Identifying bottlenecks, redundancies, and points for automation to save time and resources.",
      icon: Settings,
      bgColor: "bg-orange-gradient",
      hoverColor: "hover:bg-orange-primary",
    },
    {
      id: 4,
      title: <>Data Analysis &<span className="md:hidden inline">
        <br />
      </span> Visualization</>,
      description: "Identifying areas of underperformance and suggested target improvements.",
      icon: AreaChart,
      bgColor: "bg-green-gradient",
      hoverColor: "hover:bg-green-primary",
    },
  ];

  return (
    <section id="service">
      <div className="text-center md:mt-10 ">
        <h1 className="text-4xl md:text-5xl  text-primary-text  font-semibold mb-4">
          Take Clear  <br /> Actionable  {""}
          <span className="italic font-instrument-serif font-medium text-secondary-text ">
            Insights
          </span>
        </h1>
      </div>

      <div className="text-center mt-10 mb-10">
        <p className="text-sm md:text-lg text-secondary-text max-w-5xl mx-auto">
          At Data Huaka'i, we provide personalized data analysis and consulting services to help small to mid-sized businesses in Hawaii make informed choices based on clear data to grow their business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col px-3 md:px-0  md:flex-row justify-center gap-3 sm:gap-4 mb-16 max-w-7xl mx-auto">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="w-full sm:h-60 h-50  perspective-1000"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer
                ${hoveredCard === service.id ? 'rotate-y-180' : ''}
              `}>
                {/* Front of card */}
                <div className={`
                  absolute inset-0 w-full h-full backface-hidden
                  ${service.bgColor} ${service.hoverColor}
                  rounded-2xl p-8 shadow-lg
                `}>
                  <div className="flex flex-col gap-2 h-full justify-center">
                    <IconComponent
                      size={36}
                      className="mb-4  absolute top-8  left-5 transition-transform duration-300"
                    />
                    <h3 className="text-primary-text absolute bottom-10 text-2xl leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`
                  absolute inset-0 w-full h-full backface-hidden rotate-y-180
                  ${service.bgColor} ${service.hoverColor}
                  rounded-2xl p-6 shadow-lg
                `}>
                  <div className="flex flex-col gap-3 h-full justify-center">
                    <p className="text-primary-text text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-primary md:max-w-7xl mx-3 md:mx-auto p-8 md:p-9 mb-10 rounded-4xl text-white1 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left px-3 mb-3 md:mb-0 md:mr-8">
            <h3 className="text-2xl md:text-2xl font-semibold">
              See Our Work in Action. Start Your Creative {""}
              <span className="hidden md:inline">
                <br />
              </span>
              Journey with Us!
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button text="Browse Projects" link="#Projects" className="bg-gray-100 text-black min-w-44" />
            <Button text="Book A Call" link="" className="bg-black text-white min-w-44 border " />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Service_Section;
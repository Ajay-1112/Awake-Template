import React, { useState } from "react";
import Button from "./Button";
import { Palette, Package, Smile, Wrench, BarChart3 } from "lucide-react";
const Service_Section = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: (
        <>
          Brand <br /> Strategy
        </>
      ),
      icon: Palette,
      bgColor: "bg-purple-gradient",
      hoverColor: "hover:bg-purple-primary",
      iconColor: "text-purple-primary",
    },
    {
      id: 2,
      title: (
        <>
          Web <br /> Development
        </>
      ),
      icon: Package,
      bgColor: "bg-rose-gradient",
      hoverColor: "hover:bg-rose-primary",
      iconColor: "text-rose-primary",
    },
    {
      id: 3,
      title: (
        <>
          Digital <br /> Marketing
        </>
      ),
      icon: Smile,
      bgColor: "bg-blue-gradient",
      hoverColor: "hover:bg-secondary",
      iconColor: "text-secondary",
    },
    {
      id: 4,
      title: (
        <>
          UI/UX <br /> Designing
        </>
      ),
      icon: Wrench,
      bgColor: "bg-orange-gradient",
      hoverColor: "hover:bg-orange-primary",
      iconColor: "text-orange-primary",
    },
    {
      id: 5,
      title: (
        <>
          Analytics & <br /> Reporting
        </>
      ),
      icon: BarChart3,
      bgColor: "bg-green-gradient",
      hoverColor: "hover:bg-green-primary",
      iconColor: "text-green-primary",
    },
  ];

  return (
    <section id="service">
      <div className="text-center md:mt-10 ">
        <h1 className="text-4xl md:text-5xl  text-primary-text  font-semibold mb-4">
          Where innovation <br /> meets {""}
          <span className="italic font-instrument-serif font-medium text-secondary-text ">
            aesthetics
          </span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid px-3 md:px-3 grid-cols-2 md:flex md:flex-wrap   justify-center gap-3 md:gap-4 mb-16 max-w-7xl mx-auto">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={`
                                ${service.bgColor} ${service.hoverColor}
                              rounded-2xl p-8 transition-all duration-300 cursor-pointer
                              transform hover:scale-105 hover:shadow-xl
                              w-full sm:w-48 md:w-52 lg:w-56
                              ${
                                hoveredCard === service.id
                                  ? "shadow-2xl"
                                  : "shadow-lg"
                              }
                            `}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col gap-2 ">
                <IconComponent
                  size={36}
                  className={`${
                    service.iconColor
                  } mb-4 transition-transform duration-300 ${
                    hoveredCard === service.id ? "scale-110" : ""
                  }`}
                />
                <h3 className="text-primary-text  font-semibold text-xl leading-tight">
                  {service.title}
                </h3>
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
            <Button text="Get Started" link="/get-started" className="bg-gray-100 text-black w-44" />
            <Button text="View Portfolio" link="/portfolio" className="bg-black text-white w-44 border " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service_Section;

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../Components/Button";

const Past_Work_Section = () => {
  const cardData = [
    {
      image:
        "/images/portfolio_img/Proper.webp",
      title: "Keshah Quizn",
      sub_title:
        "Our client, Andrew Davies from Studio Proper, is a brand driven by timeless elegance and innovative design, inspired by the sophistication of Apple. They specialize in crafting high-quality, functional tech accessories that combine beauty with simplicity, designed to enhance the experience of personal and professional tech.",
    },
    {
      image:
        "/images/portfolio_img/Artify-Image-Restyle.webp",
      title: "AI Image Restyle",
      sub_title:
        "Our client, an aspiring entrepreneur, approached The Web Navigators to create a cutting-edge platform for social media influencers, photographers, and casual users to transform their photos effortlessly using AI-powered filters."
    },
    {
      image:
        "/images/portfolio_img/Gu-Wi-Dashboard.webp",
      title: "Gu-Wi Admin Dashboard",
      sub_title:
        "Our client, GuWi, a leading house cleaning service provider, approached The Web Navigators to build a comprehensive admin dashboard that would streamline their service management and analytics."
    },
    {
      image:
        "/images/portfolio_img/GuWiGuttersAndWindows.webp",
      title: "Gu-Wi Quote Builder",
      sub_title:
        "Our client, Gavin Gene from Gu-Wi, approached The Web Navigators to streamline the quoting process for their business by creating a custom tool that automatically generates two quotes for customers using data from JotForm.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-3 md:px-6 md:py-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-primary-text  mb-4">
          How we transformed a small{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          business’s{" "}
          <span className="italic text-secondary-text font-medium  font-instrument-serif">
            online presence
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 cursor-pointer">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl  bg-white1 transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full md:h-80 h-40 object-cover rounded-2xl"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex justify-end items-start p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="text-white bg-black/60 rounded-full p-2" onClick={() => window.location.href = "https://www.thewebnavigators.com/portfolio"}>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Text content */}
            <div className="md:p-4 relative z-20 bg-white ">
              <h3 className="md:text-xl text-sm font-bold mt-2 text-primary-text ">
                {card.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-secondary-text sm:text-sm text-[12px]">
                {card.sub_title?.split(" ").slice(0, 12).join(" ") + (card.sub_title?.split(" ").length > 15 ? "..." : "")}
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary md:max-w-7xl mx-3 mt-10 md:mx-auto p-8 md:p-9 mb-10 rounded-4xl text-white1 shadow-2xl">
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
            <Button text="Browse Projects" link="https://thewebnavigators.com/portfolio" className="bg-gray-100 text-black min-w-44" />
            <Button text="Book A Call" link="" className="bg-black text-white min-w-44 border " />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Past_Work_Section;

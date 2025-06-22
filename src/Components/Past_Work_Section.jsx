import React from "react";
import { ArrowUpRight } from "lucide-react";

const Past_Work_Section = () => {
  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      title: "Startup Website Redesign",
      tags: ["UX Research", "Interface Design"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      title: "E-learning Platform UI",
      tags: ["User Testing", "Wireframing"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
      title: "Healthcare Portal Design",
      tags: ["UX Research", "Accessibility"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      title: "B2B Dashboard Concept",
      tags: ["Wireframing", "Design System"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl  bg-white1 transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-80 object-cover rounded-2xl"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex justify-end items-start p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="text-white bg-black/60 rounded-full p-2">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 relative z-20 bg-white ">
              <h3 className="text-xl font-bold mt-2 text-primary-text ">
                {card.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-primary-light text-md font-semibold">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="border border-border rounded-full px-3 text-secondary-text  py-1 text-sm "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Past_Work_Section;

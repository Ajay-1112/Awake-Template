import React from "react";

const Testimonial_Section = () => {
  const data = {
    testimonial: {
      sectionTitle: "Customer stories",
      quote: "Data Huaka’i helped us see exactly where our operations were underperforming. Their insights saved us time and money — and gave us a new level of confidence in our decisions.",
      customer: {
        name: "Jane M., Operations Manager",
        title: "Island Goods",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
        background:
          "/images/Screenshot 2023-03-29 at 3.46.12 PM.png"
      },
    },
    statistics: {
      sectionTitle: "Facts & numbers",
      stats: [
        {
          value: "91%",
          description: "of our clients recommend us to other local businesses",
        },
      ],
    },
  };
  const customerStories = [
    {
      id: 1,
      type: "featured",
      title:
        "Before working with Data Huaka’i, we didn’t realize how much opportunity we were leaving on the table. Now we use data to guide every decision.",
      image:
        "public/images/Screenshot 2023-03-29 at 3.43.17 PM.png",
      imageAlt: "Modern interior design with lamp and decorative objects",
    },
    {
      id: 2,
      type: "testimonial",
      quote: "We’ve worked with consultants before, but never had someone break things down so clearly and personally. Game-changing.",

      author: "Maria L., Co-founder",
      position: "Co-founder, Reef Cafe",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto md:px-6 px-3 md:pt-16">
      <h2 className="text-center text-primary-text text-4xl md:text-5xl font-semibold mb-12">
        Here’s what Hawaii businesses
        {" "}
        <span className="hidden md:inline">
          <br />
        </span>
        say about {" "}
        <span className="font-instrument-serif italic font-medium text-secondary-text">
          Data Huaka’i
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Testimonial Card */}
        <div
          className="flex-1 relative rounded-2xl overflow-hidden text-white1 min-h-[420px] flex items-end p-8"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('${data.testimonial.customer.background}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="z-10">
            <div className="text-sm text-primary-text absolute top-10 mb-4">
              {data.testimonial.sectionTitle}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium leading-snug mb-6">
              {data.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-semibold text-white1 text-lg">
                {data.testimonial.customer.name}
              </div>
              <div className="text-primary-white1 text-sm">
                {data.testimonial.customer.title}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div
          className="relative lg:w-[30%] min-h-[350px] 
        bg-yellow-200 rounded-2xl p-8 flex flex-col justify-start"
        >
          <p className="text-sm text-primary-text mb-8">
            {data.statistics.sectionTitle}
          </p>

          {/* Stats */}
          {data.statistics.stats.map((stat, index) => (
            <div key={index} className="text-left absolute bottom-8 ">
              <div className="text-6xl font-bold text-primary-text mb-4">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-primary-text leading-snug">
                “{stat.description}”
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-h-[100px]  flex-col lg:flex-row gap-8 mt-10">
        {customerStories.map((story) => (
          <div
            key={story.id}
            className={`max-w-7xl  ${story.type === "featured" ? "lg:w-[30%]" : "lg:w-[70%]"
              } w-full`}
          >
            {story.type === "featured" ? (
              <div className="bg-gray-900 text-white1 rounded-2xl p-8 h-full">
                <div className="mb-6">
                  <p className="text-secondary-text text-sm mb-4">
                    Customer stories
                  </p>
                  <h2 className="text-xl font-semibold text-left leading-tight">
                    {story.title}
                  </h2>
                </div>

                <div className="rounded-xl overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white1 rounded-2xl p-8 h-full shadow-sm flex flex-col">
                <div className="mb-8">
                  <p className="text-secondary-text text-sm mb-6">
                    Customer stories
                  </p>
                  <blockquote className="text-xl font-semibold text-primary-text leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                </div>

                <div className="mt-auto">
                  <p className="font-semibold text-primary-text mb-1">
                    {story.author}
                  </p>
                  <p className="text-secondary-text text-sm">{story.position}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial_Section;

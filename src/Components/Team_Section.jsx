import React from "react";

const Team_Section = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana dialan",
      title: "Product designer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Micheal colorand",
      title: "Software engineer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Brown Luis",
      title: "Full stack engineer",
    },
  ];

  return (
    <section className="md:pt-10">
      <div className="max-w-screen-xl mx-auto px-3 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-primary-text text-4xl font-semibold  md:text-5xl">
            Meet the creative minds <span className="hidden md:inline"><br /></span>{""}
            behind <span className="italic  text-secondary-text font-medium font-instrument-serif">our success</span>
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-primary-text font-semibold">
                    {item.name}
                  </h4>
                  <p className=" text-secondary-text">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team_Section;

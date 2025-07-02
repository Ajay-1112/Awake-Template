import React from "react";

const Button = ({ text = "Let's Collaborate", link = "", className = "" }) => {
  return (
    <div className="inline-block">
      <a href={link}>
        <button
          className={`
            flex justify-around gap-3  relative overflow-hidden  
             p-3 rounded-full  group
            transition-all duration-300 
            items-center  
            shadow-lg hover:shadow-xl hover:scale-105
            min-w-48
            ${className}
          `}
        >
          <span className="relative z-10  font-medium">{text}</span>
          <div className="w-7 h-7 bg-white1 rounded-full flex items-center justify-center group-hover:rotate-35 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute inset-0 "></div>
        </button>
      </a>
    </div>
  );
};

export default Button;

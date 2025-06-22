import React from "react";

const LogoMarquee = () => {
  const logos = [
    {
      name: "Microsoft",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      alt: "Microsoft Logo",
    },
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
      alt: "Google Logo",
    },
    {
      name: "Apple",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
      alt: "Apple Logo",
    },
    {
      name: "Amazon",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
      alt: "Amazon Logo",
    },
    {
      name: "Netflix",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
      alt: "Netflix Logo",
    },
    {
      name: "Tesla",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/512px-Tesla_T_symbol.svg.png",
      alt: "Tesla Logo",
    },
    {
      name: "Spotify",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/512px-Spotify_logo_without_text.svg.png",
      alt: "Spotify Logo",
    },
    {
      name: "Adobe",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png",
      alt: "Adobe Logo",
    },
    {
      name: "Slack",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png",
      alt: "Slack Logo",
    },
    {
      name: "Shopify",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
      alt: "Shopify Logo",
    },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="lg:max-w-7xl max-w-96 mx-auto pt-12 md:pt-26 overflow-hidden">
      <div class="flex items-center justify-center mb-5 gap-8 md:mb-12 px-4">
        <hr class="flex-1 hidden lg:inline max-w-90 border-t border-gray-300" />
        <p class="  mx-auto text-secondary-text text-center md:whitespace-nowrap">
          Loved by 1000+ big and small brands around the world
        </p>
        <hr class="flex-1 hidden lg:inline max-w-90 border-t border-gray-300" />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap  will-change-transform">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="inline-flex items-center justify-center border border-border mx-4 md:mx-8 px-4 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white  transition-transform duration-300 hover:scale-110 flex-shrink-0 min-w-[150px] md:min-w-[200px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8 w-auto max-w-[80px] md:max-w-[120px] object-contain transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="text-lg md:text-xl font-semibold text-gray-800 hidden">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;

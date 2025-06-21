import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png", alt: "Microsoft Logo" },
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png", alt: "Google Logo" },
    { name: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png", alt: "Apple Logo" },
    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png", alt: "Amazon Logo" },
    { name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png", alt: "Netflix Logo" },
    { name: "Tesla", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/512px-Tesla_T_symbol.svg.png", alt: "Tesla Logo" },
    { name: "Spotify", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/512px-Spotify_logo_without_text.svg.png", alt: "Spotify Logo" },
    { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png", alt: "Adobe Logo" },
    { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png", alt: "Slack Logo" },
    { name: "Shopify", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png", alt: "Shopify Logo" }
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="max-w-7xl mx-auto pt-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-dark-text">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg max-w-2xl px-3 mx-auto text-light-text">
          Join thousands of companies worldwide who trust our platform to power their business
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-mobile md:animate-marquee-desktop whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="inline-flex items-center justify-center mx-4 md:mx-8 px-4 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white shadow-sm border border-gray-100 transition-transform duration-300 hover:scale-110 flex-shrink-0 min-w-[150px] md:min-w-[200px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 w-auto max-w-[80px] md:max-w-[120px] object-contain transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span
                className="text-lg md:text-xl font-semibold text-gray-800 hidden"
              >
                {logo.name}
              </span>
            </div>
          ))}
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

        /* Mobile animation - faster speed */
        .animate-marquee-mobile {
          animation: marquee 15s linear infinite;
        }

        /* Desktop animation - moderate speed */
        .animate-marquee-desktop {
          animation: marquee 25s linear infinite;
        }

        /* Pause on hover for both */
        .animate-marquee-mobile:hover,
        .animate-marquee-desktop:hover {
          animation-play-state: paused;
        }

        /* Media queries for more precise control */
        @media (max-width: 640px) {
          .animate-marquee-mobile {
            animation: marquee 4s linear infinite;
          }
        }

        @media (min-width: 1024px) {
          .animate-marquee-desktop {
            animation: marquee 10s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
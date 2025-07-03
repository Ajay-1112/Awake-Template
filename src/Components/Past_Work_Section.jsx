import Button from "./Button";

const features = [
  {
    title: "Keshah Quiz",
    image: "/images/portfolio_img/KeshahQuiz.webp",
    details:
      "Our client, Andrew Davies from Studio Proper, envisioned a digital platform that reflected the timeless elegance and precision their physical products represent. We delivered a bespoke website and backend system that allows customers to explore, customize, and purchase accessories with ease. With smooth transitions, responsive design, and an intuitive product gallery, the platform mirrors Apple-like quality, elevating the brand's identity online.",
    tutorialLink: "https://quiz.keshah.com/hairgrowth",
  },
  {
    title: "AI Image Restyle",
    image: "/images/portfolio_img/Artify-Image-Restyle.webp",
    details:
      "An aspiring entrepreneur approached us with a concept to let users transform their selfies using AI-powered filters. We developed a fast, intuitive platform where users can upload images and instantly apply artistic transformations, powered by deep learning models. The project included a custom-trained AI pipeline, filter previewing, mobile optimization, and a scalable backend for high traffic. Influencers and casual users alike now use it to create standout content effortlessly.",
    tutorialLink: "https://myartify.ai/",
  },
  {
    title: "Gu-Wi Admin Dashboard",
    image: "/images/portfolio_img/Gu-Wi-Dashboard.webp",
    details:
      "GuWi, a top-tier house cleaning service, needed a powerful dashboard to track bookings, team assignments, customer feedback, and service history. We designed and built a robust admin interface with real-time analytics, user management, and dynamic scheduling tools. The solution reduced their manual operations by over 60% and allowed their internal team to respond faster to customer needs while scaling their field operations.",
    tutorialLink: "https://guwi-dashboard-v2-1.vercel.app/",
  },
  {
    title: "Gu-Wi Quote Builder",
    image: "/images/portfolio_img/GuWiGuttersAndWindows.webp",
    details:
      "To eliminate manual quoting for GuWi’s window and gutter cleaning services, we developed an intelligent quote builder that integrated directly with JotForm submissions. The tool automatically generated two quote versions based on service area, size, and complexity, providing customers with instant estimates. This significantly improved their lead conversion rates and created a seamless first-touch experience for potential clients.",
    tutorialLink: "https://guwiquotebuilder.com/#/5722451285136736892",
  },
];


const Past_Work_Section = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold text-center tracking-tight max-w-7xl md:text-center md:mx-auto">
          How we transformed a small <br className="hidden md:inline" />
          business’s{" "}
          <span className="font-instrument-serif italic font-medium">
            online presence
          </span>
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="basis-1/2 shrink-0">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {feature.details.length > 250
                    ? `${feature.details.substring(0, 250)}...`
                    : feature.details}
                </p>
                <Button
                  className="mt-4 bg-black hover:bg-black/70 text-white"
                  text="Know More"
                  link={feature.tutorialLink}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Past_Work_Section;

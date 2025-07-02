import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Thompson",
    username: "Marketing Lead, LuminaTech",
    body: "Partnering with The Web Navigators revolutionized our online strategy. The dashboard they built helped us track KPIs in real time and make faster decisions.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Kim",
    username: "Founder, SnapStyle AI",
    body: "The team nailed our vision for an AI-powered restyling tool. From UI design to performance, everything exceeded expectations.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rachel Lopez",
    username: "CEO, CleanNest Services",
    body: "What stood out was their communication and clarity. They built a robust admin dashboard that streamlined our field operations.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Bennett",
    username: "CTO, VisualIQ",
    body: "Their custom quoting tool saved us hours of manual work every week. I’d recommend them without hesitation.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Amanda Chen",
    username: "Product Manager, GridFusion",
    body: "Beautiful UX, fast delivery, and smooth collaboration. They made launching our beta product effortless.",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    name: "Liam O'Reilly",
    username: "CMO, PhotoSpark",
    body: "Professional, creative, and reliable. Our image transformation app came to life exactly as imagined.",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

const midpoint = Math.ceil(reviews.length / 2);
const firstRow = reviews.slice(0, midpoint);
const secondRow = reviews.slice(midpoint);

const StarRating = () => (
  <div className="flex gap-0.5 text-yellow-500">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-500" />
    ))}
  </div>
);

const ReviewCard = ({ img, name, username, body }) => (
  <figure
    className={cn(
      "relative h-full w-72 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-5 transition-all shadow-sm hover:shadow-md",
      "border-gray-200 bg-white dark:border-white/10 dark:bg-white/5 hover:dark:bg-white/10"
    )}
  >
    <div className="flex items-center gap-3">
      <img className="rounded-full w-10 h-10 object-cover" alt={name} src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-semibold text-black dark:text-white">
          {name}
        </figcaption>
        <p className="text-xs text-gray-600 dark:text-white/60">{username}</p>
      </div>
    </div>
    <blockquote className="mt-3 text-sm text-gray-800 dark:text-white/90 leading-relaxed">
      “{body}”
    </blockquote>
    <div className="mt-4">
      <StarRating />
    </div>
  </figure>
);

const Testimonial_Section = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-primary-text md:px-10 mb-12 text-center">
         Here’s what Hawaii businesses<br/>
        say about <span className="font-instrument-serif font-medium">Data Huaka’i</span></h2>

      <div className="relative flex flex-col items-center justify-center overflow-hidden py-10">
        <Marquee pauseOnHover className="[--duration:20s] space-x-6">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] space-x-6 mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background via-background/60 to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonial_Section;

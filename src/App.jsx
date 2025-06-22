import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Button from "./Components/Button";
import LogoMarquee from "./Components/Marquee";
import Navbar from "./Components/Navbar/Navbar";
import About_Section from "./Components/About_Section.jsx";
import Service_Section from "./Components/Service_Section";
import Past_Work_Section from "./Components/Past_Work_Section";
import Team_Section from "./Components/Team_Section";
import Faq_Section from "./Components/Faq_Section";
import AwakeFooter from "./Components/Footer_Section";
import Testimonial_Section from "./Components/Testimonial_Section";
import Pricing_Section from "./Components/Pricing_Section";

import AwardsSection from "./Components/Awards_Section";

// Enhanced Animations
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const App = () => {
  return (
    <div className="w-full font-inter">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className=" min-h-screen rounded-b-2xl flex flex-col items-center justify-center text-center px-4 pt-12 md:pt-4 md:pb-0 lg:pt-32 "
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.35), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2), transparent 45%),
            radial-gradient(circle at 50% 70%, rgba(255, 255, 255, 0.15), transparent 50%),
            linear-gradient(180deg, #eaf6fc 0%, #f3fafd 50%, #ffffff 100%)`,
        }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className="text-[55px] md:text-7xl lg:text-9xl font-semibold text-primary-text mb-6 leading-tight max-w-7xl"
          variants={fadeUp}
        >
          Building bold brands {""}
          <span className="hidden md:inline">
            <br />
          </span>
          with{" "}
          <span className="text-secondary-text font-medium font-instrument-serif italic">
            thoughtful design
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-secondary-text  mb-8 max-w-3xl"
          variants={fadeUp}
        >
          At Awake, we help small startups tackle the world's biggest challenges
          with tailored solutions—guiding you from strategy to success.
        </motion.p>

        <motion.div
          className="text-center md:flex gap-5 items-center"
          variants={fadeUp}
        >
          <Button
            text="Get Started"
            link="#Services"
            className="bg-blue-600  w-40 text-white1"
          />
          <div className="md:flex gap-5 mt-6 md:mt-0 justify-center items-center space-y-3 ">
            <div className="flex mt-2 items-center justify-center">
              <img
                className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                alt="Client 1"
              />
              <img
                className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80"
                alt="Client 2"
              />
              <img
                className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80"
                alt="Client 3"
              />
              <img
                className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80"
                alt="Client 4"
              />
            </div>
            <div className="flex flex-col justify-center text-center">
              {/* Star Rating */}
              <div className="flex md:justify-start justify-center items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
              </div>

              {/* Trust Text */}
              <p className="text-secondary-text text-sm font-medium">
                Trusted by 1000+ clients
              </p>
            </div>
          </div>
        </motion.div>
      <LogoMarquee />
      </motion.section>

      {/* Reuse the same animation for all sections */}
      {[
        { id: "About", Component: About_Section },
        { id: "Services", Component: Service_Section },
        { id: "Projects", Component: Past_Work_Section },
        { id: "Team", Component: Team_Section },
        { id: "Testimonial", Component: Testimonial_Section },
        { id: "Pricing", Component: Pricing_Section },
        { id: "Faq", Component: Faq_Section },
        { id: "Awards", Component: AwardsSection },

        // eslint-disable-next-line no-unused-vars
      ].map(({ id, Component }) => (
        <motion.section
          key={id}
          id={id}
          className="  pt-10 md:pt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Component />
        </motion.section>
      ))}

      <AwakeFooter />
    </div>
  );
};

export default App;

import { motion } from "framer-motion";

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
    <div className="w-full  bg-[linear-gradient(135deg,#ffffff_0%,#dbeadf_50%,#588157_150%)] font-inter">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="bg-[linear-gradient(135deg,#ffffff_0%,#dbeadf_50%,#588157_100%)] min-h-screen rounded-b-2xl flex flex-col items-center justify-center text-center px-4 py-16 md:pt-4 md:pb-24 lg:pt-38 lg:pb-24"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className="text-[55px] md:text-7xl lg:text-9xl font-semibold text-dark-text mb-6 leading-tight max-w-7xl"
          variants={fadeUp}
        >
          Building bold brands {""}
          <span className="hidden md:inline">
            <br />
          </span>
          with{" "}
          <span className="text-light-text font-instrument-serif italic">
            thoughtful design
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-light-text  mb-8 max-w-3xl"
          variants={fadeUp}
        >
          At Awake, we help small startups tackle the world's biggest challenges
          with tailored solutions—guiding you from strategy to success.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Button text="Get Started" link="#Services" />
        </motion.div>
      </motion.section>
      <LogoMarquee />

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
          className="pt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Component />
        </motion.section>
      ))}

      <AwakeFooter />
    </div>
  );
};

export default App;

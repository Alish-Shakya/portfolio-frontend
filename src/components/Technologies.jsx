import GithubIcon from "./ui/icons/GithubIcon";

import { animate, motion } from "framer-motion";
import HtmlIcon from "./ui/icons/HtmlIcon";
import CssIcon from "./ui/icons/CssIcon";
import JsIcon from "./ui/icons/JsIcon";
import ReactIcon from "./ui/icons/ReactIcon";
import NodeIcon from "./ui/icons/NodeIcon";
import MongoIcon from "./ui/icons/MongoIcon";
import TailwindIcon from "./ui/icons/TailwindIcon";
import GitIcon from "./ui/icons/GitIcon";
import ExpressIcon from "./ui/icons/ExpressIcon";
import PostmanIcon from "./ui/icons/PostmanIcon";
import VsCodeIcon from "./ui/icons/VsCodeIcon";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <h2 className="mt-10 text-2xl md:text-5xl text-center text-green-400">
        Tools & Technologies
      </h2>

      {/* upper tech  */}
      <div className="mb-10"></div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex md:flex-wrap items-center justify-center gap-5 md:gap-30  text-2xl md:text-4xl"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <HtmlIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <CssIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <JsIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <ReactIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <NodeIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <MongoIcon />
        </motion.div>
      </motion.div>

      {/* lower tech  */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="md:ml-20 flex md:flex-wrap items-center justify-center gap-5 md:gap-30 p-10 text-2xl md:text-4xl"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <TailwindIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <GithubIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <GitIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <ExpressIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <PostmanIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <VsCodeIcon />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Technologies;

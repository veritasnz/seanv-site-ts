import { motion } from "framer-motion";
import { ReactNode } from "react";

const FM_VARIANTS = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
};

const FM_TRANSITION = {
  type: "linear",
  duration: 0.45,
};

interface Props {
  children: ReactNode;
}

export const PageTransitionWrapper: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      variants={FM_VARIANTS}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={FM_TRANSITION}
    >
      {children}
    </motion.div>
  );
};

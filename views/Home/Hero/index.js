import React from "react";
import { Download } from "../../../assets/icons";
import { motion } from "framer-motion";
import styles from "../../../styles/home-hero.module.scss";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <motion.section
      className={styles.hero}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <motion.h1
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileHover={{ scale: 1.02 }}
      >
        Hi, im <span>Enzo.</span> <br />
        Software Engineer
      </motion.h1>
      <div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={styles.primary}
          onClick={() => {
            handleClick("/projects");
          }}
        >
          Projects
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="Enzo_spagnolli_cv.pdf"
          download="Enzo_spagnolli_cv.pdf"
        >
          <Download /> Download CV
        </motion.a>
      </div>
    </motion.section>
  );
};

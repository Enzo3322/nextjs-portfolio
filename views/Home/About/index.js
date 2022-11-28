import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../../../assets/icons";
import styles from "../../../styles/home-about.module.scss";
import Link from "next/link";
import { ToolsComponent } from "../../../components/Tolls";
import { TollsArr } from "../../../mock";

export const About = () => {
  return (
    <section className={styles.about}>
      <motion.div whileHover={{ scale: 1.02 }} className={styles.container}>
        <div className={styles.left}>
          <picture>
            <img src="/me.svg" alt="Enzo Spagnolli" />
          </picture>
        </div>
        <div className={styles.right}>
          <div>
            <h2>About me</h2>
            <p>
              I've been a Web developer for over 3 years focusing on developing
              solutions for medium and large E-commerces, I have experience in
              developing NodeJs microservices and automated testing with
              Cypress.io.
            </p>
            <p>
              I have a degree in Systems Analysis and Development and I am
              currently a Senior Frontend Developer.
            </p>
          </div>

          <Link href="/about/">
            <div className={styles.link}>
              See more <ArrowRight />
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

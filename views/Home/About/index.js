import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '../../../assets/icons';
import styles from '../../../styles/home-about.module.scss';
import Link from 'next/link';

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
							I have just over 3 years of experience with web development, I've
							worked with:
						</p>

						<ul>
							<li>Javascript</li>
							<li>Typescript</li>
							<li>ReactJs</li>
							<li>NextJs</li>
							<li>VtexIO</li>
							<li>NodeJs</li>
							<li>Heroku</li>
							<li>Cypress</li>
							<li>Figma</li>
							<li>Vercel</li>
							<li>Jira</li>
							<li>Graphql</li>
							<li>Azure Devops</li>
							<li>Runrun.it</li>
						</ul>
						<p>
							Currently I work in the development of Ecommerces in a Brazilian
							agency and I&apos;m open to new opportunities.
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

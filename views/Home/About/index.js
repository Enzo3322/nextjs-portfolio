import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '../../../assets/icons';
import styles from '../../../styles/home-about.module.scss';
import Link from 'next/link';
import { ToolsComponent } from '../../../components/Tolls';
import { TollsArr } from '../../../mock';

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
							I have just over 3 years of experience with web development,
							I&apos;ve worked with:
						</p>
						<ToolsComponent tools={TollsArr} />
						<p>
							Currently I work in the development of E-commerces in a Brazilian
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

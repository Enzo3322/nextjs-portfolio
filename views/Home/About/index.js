import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from '../../../assets/icons';
import styles from '../../../styles/home-about.module.scss';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export const About = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 1 }, left: 0 },
		hidden: { opacity: 0 },
	};
	useEffect(() => {
		if (inView) {
			control.start('visible');
		}
	}, [control, inView]);

	return (
		<section className={styles.about}>
			<motion.div className={styles.container}>
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

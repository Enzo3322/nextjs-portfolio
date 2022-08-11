import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '../../../assets/icons';
import styles from '../../../styles/home-about.module.scss';
import Image from 'next/image';

export const About = () => {
	return (
		<section className={styles.about}>
			<motion.div whileHover={{ scale: 1.02 }} className={styles.container}>
				<div className={styles.left}>
					<img src="/me.png" alt="" />
				</div>
				<div className={styles.right}>
					<div>
						<h2>About me</h2>

						<p>
							I&lsquo;ve been a software developer for just over 3 years, I have
							advanced experience in:
						</p>
						<ul>
							<li>Javascript</li>
							<li>Typescript</li>
							<li>Reactjs</li>
							<li>VtexIO</li>
							<li>Nodejs</li>
							<li>Heroku</li>
							<li>Cypress</li>
							<li>Figma</li>
							<li>Vercel</li>
							<li>Jira</li>
							<li>Gitlab</li>
							<li>Azure Devops</li>
							<li>Trello</li>
							<li>Runrun.it</li>
						</ul>
						<p>
							Actually i work on the development of e-commerce based on CMS VTEX
						</p>
					</div>

					<button>
						See more <ArrowRight />
					</button>
				</div>
			</motion.div>
		</section>
	);
};

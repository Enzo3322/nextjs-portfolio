import React from 'react';
import { ArrowRight } from '../../../assets/icons';
import { motion } from 'framer-motion';
import { Cards } from '../../../components/Cards';
import styles from '../../../styles/home-projects.module.scss';

export const HomeProjects = () => {
	return (
		<section className={styles.home_projects}>
			<h2>Projects</h2>
			<Cards />
			<div>
				<motion.button whileHover={{ scale: 1.05 }}>
					See more <ArrowRight />
				</motion.button>
			</div>
		</section>
	);
};

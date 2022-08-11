import React from 'react';
import { projectsArr } from '../../mock';
import { motion } from 'framer-motion';
import styles from '../../styles/home-projects.module.scss';
export const Cards = () => {
	if (!projectsArr) return null;

	return (
		<div className={styles.grid}>
			{projectsArr.map((a, i) => (
				<motion.a
					href={`/projects?pid=${a.pid}`}
					whileHover={{ scale: 1.03 }}
					key={i}
					className={styles.image}
				>
					<picture>
						<img src={a.banner1} alt="" />
					</picture>
				</motion.a>
			))}
		</div>
	);
};

import React from 'react';
import { Download } from '../../../assets/icons';
import { motion } from 'framer-motion';
import styles from '../../../styles/home-hero.module.scss';

export const Hero = () => {
	return (
		<motion.section
			className={styles.hero}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ type: 'spring', duration: 1 }}
		>
			<motion.h1
				drag
				dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
				whileHover={{ scale: 1.02 }}
			>
				Hi, im <span>Enzo.</span> <br />
				Software Engineer
			</motion.h1>
			<p>This is my portfolio!</p>
			<div>
				<motion.button whileHover={{ scale: 1.05 }} className={styles.primary}>
					Projects
				</motion.button>
				<motion.button whileHover={{ scale: 1.05 }}>
					<Download /> Download CV
				</motion.button>
			</div>
		</motion.section>
	);
};

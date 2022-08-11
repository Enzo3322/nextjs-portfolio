import React from 'react';
import { ArrowRight } from '../../../assets/icons';
import { motion } from 'framer-motion';
import { Cards } from '../../../components/Cards';
import styles from '../../../styles/home-projects.module.scss';
import { useRouter } from 'next/router';

export const HomeProjects = () => {
	const router = useRouter();
	const handleNavigate = (route) => {
		router.push(route);
	};
	return (
		<section className={styles.home_projects}>
			<h2>Projects</h2>
			<Cards number={2} />
			<div>
				<motion.button
					onClick={() => {
						handleNavigate('/projects');
					}}
					whileHover={{ scale: 1.05 }}
				>
					See more <ArrowRight />
				</motion.button>
			</div>
		</section>
	);
};

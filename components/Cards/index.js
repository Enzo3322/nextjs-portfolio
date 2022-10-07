import React from 'react';
import styles from '../../styles/home-projects.module.scss';
// import { Flags } from '../Flags';

export const Cards = ({ number, projects }) => {
	if (!projects) return null;

	const range = number ?? projects.length;

	return (
		<div className={styles.grid}>
			{projects.map((project, i) => {
				if (i < range) {
					return (
						<a
							href={`/project?pid=${project.pid}`}
							key={i}
							className={styles.image}
						>
							<picture>
								<img src={project.banner1} alt="" />
							</picture>
							{/* <Flags flagsArr={project.stacks} /> */}
						</a>
					);
				}
			})}
		</div>
	);
};

import { skillsArr } from '../mock';
import { motion } from 'framer-motion';
import styles from '../styles/about.module.scss';
export default function About() {
	return (
		<main className={styles.about}>
			<div className={styles.profile}>
				<div className={styles.image}>
					<picture>
						<img src="/me.svg" alt="" />
					</picture>
				</div>
				<div className={styles.text}>
					<h1>
						Enzo <span>Spagnolli</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices um auctor ornare leo,
						non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
						maximus ante fermentum sit amet. Pellentesque commodo lacus at
						sodales sodales. Quisque sagittis orci ut diam condimentum, vel
						euismod erat placerat. In iaculis arcu eros, eget tempus orci
						facilisis id.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices um auctor ornare leo,
						non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
						maximus ante fermentum sit amet. Pellentesque commodo lacus at
						sodales sodales. Quisque sagittis orci ut .
					</p>
					<a href="mailto:enzo.spag14@gmail.com">enzo.spag14@gmail.com</a>
				</div>
			</div>

			<div className={styles.skills}>
				<div className={styles.title}>
					<h2>Minhas skills</h2>
				</div>
				<div className={styles.container}>
					<div className={styles.grid}>
						{skillsArr.map((skill, i) => (
							<motion.div
								whileHover={{ scale: 1.02 }}
								key={i}
								className={styles.skill}
							>
								<picture>
									<img src={skill.icon} alt="" />
								</picture>
								<h3>{skill.title}</h3>
								<p>{skill.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

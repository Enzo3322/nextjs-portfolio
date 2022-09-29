import { SkillsArr } from '../mock';
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
						I&apos;ve been a web developer for just over 3 years, I have
						experience in web and mobile development, currently working as a
						senior developer in an e-commerce project.
					</p>
					<p>
						I have VTEX certifications as an IO developer and implementation
						specialist and I have great affinity with the platform.
					</p>
					<p>
						I am passionate about development for embedded systems such as
						ESP-8266 and ESP-32, and in my spare time I study c++ for
						applications in industrial systems.
					</p>
					<a href="mailto:enzo.spag14@gmail.com">enzo.spag14@gmail.com</a>
				</div>
			</div>

			<div className={styles.skills}>
				<div className={styles.title}>
					<h2>Skills</h2>
				</div>
				<div className={styles.container}>
					<div className={styles.grid}>
						{SkillsArr.map((skill, i) => (
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

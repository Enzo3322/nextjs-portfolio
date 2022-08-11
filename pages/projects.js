import { projectsArr } from '../mock';
import { motion } from 'framer-motion';
import styles from '../styles/projects.module.scss';
const Project = () => {
	return (
		<main className={styles.projects_main}>
			<h1>Todos os projetos</h1>
			<div>
				{projectsArr.map((a, i) => {
					return (
						<motion.a
							href={`/project?pid=${a.pid}`}
							whileHover={{ scale: 1.03 }}
							key={i}
							className=""
						>
							<picture>
								<img src={a.banner1} alt="" />
							</picture>
						</motion.a>
					);
				})}
			</div>
		</main>
	);
};

export default Project;

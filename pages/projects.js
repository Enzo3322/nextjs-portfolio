import { useRouter } from 'next/router';
import { projectsArr } from '../mock';
import styles from '../styles/projects.module.scss';
const Projects = () => {
	const router = useRouter();
	const { pid } = router.query;
	const mock = projectsArr;

	const project = mock.find((project) => project.pid === parseInt(pid));
	if (!project) return null;
	return (
		<main className={styles.container}>
			<span>{project.category}</span>
			<h1>{project.title} </h1>
			<a href={project.link} className={styles.banner}>
				<img src={project.banner1} />
			</a>
			<h2>Sobre o projeto</h2>
			<p>{project.description}</p>
			<h2>Conceitos aplicados</h2>
			<p>{project.concepts}</p>
			<div className={styles.banner}>
				<img src={project.banner2} />
			</div>
			<h2>Ferramentas utilizadas</h2>
			<p>{project.concepts}</p>

			<div className={styles.banner}>
				<img src={project.banner3} />
			</div>
			<h2>Resumo</h2>
			<p>{project.resume}</p>
			<div className={styles.banner}>
				<img src={project.banner4} />
			</div>
		</main>
	);
};

export default Projects;

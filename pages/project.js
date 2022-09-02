import { useRouter } from 'next/router';
import { BreadCrumb } from '../components/BreadCrumb';
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
			<BreadCrumb />
			<span>{project.category}</span>
			<h1>{project.title} </h1>
			<a href={project.link} className={styles.banner}>
				<picture>
					<img src={project.banner1} alt="" />
				</picture>
			</a>
			<h2>Sobre o projeto</h2>
			<p>{project.description}</p>
			{project.concepts && <h2>Conceitos aplicados</h2>}
			<p>{project.concepts}</p>
			{project.banner2 &&
				<div className={styles.banner}>
					<picture>
						<img src={project.banner2} alt="" />
					</picture>
				</div>}
			{project.toolsApllyed && <h2>Ferramentas utilizadas</h2>}
			<p>{project.toolsApllyed}</p>

			{project.banner3 &&
				<div className={styles.banner}>
					<picture>
						<img src={project.banner3} alt="" />
					</picture>
				</div>
			}
			{project.resume && <h2>Resumo</h2>}
			<p>{project.resume}</p>
			{project.banner4 &&
				<div div className={styles.banner}>
					<picture>
						<img src={project.banner4} alt="" />
					</picture>
				</div>}
		</main>
	);
};

export default Projects;

import { useRouter } from 'next/router';
import { BreadCrumb } from '../components/BreadCrumb';
import { ProjectsArr } from '../mock';
import styles from '../styles/projects.module.scss';
const Projects = () => {
	const router = useRouter();
	const { pid } = router.query;
	const mock = ProjectsArr;

	const project = mock.find((project) => project.pid === parseInt(pid));
	if (!project) return null;

	return (
		<main className={styles.container}>
			<BreadCrumb />
			<span>{project.category}</span>
			<h1>{project.title} </h1>
			<a href={project.link} target="__blank" className={styles.banner}>
				<picture>
					<img src={project.banner1} alt="" />
				</picture>
			</a>
			<h2>Sobre o projeto</h2>
			<p>{project.description}</p>
			{project.concepts && <h2>Conceitos aplicados</h2>}
			<p>{project.concepts}</p>
			{project.banner2 && (
				<div className={styles.banner}>
					<picture>
						<img src={project.banner2} alt="" />
					</picture>
				</div>
			)}
			{project.toolsApplied && <h2>Ferramentas utilizadas</h2>}
			<p>{project.toolsApplied}</p>

			{project.banner3 && (
				<div className={styles.banner}>
					<picture>
						<img src={project.banner3} alt="" />
					</picture>
				</div>
			)}
			{project.resume && <h2>Resumo</h2>}
			<p>{project.resume}</p>
			{project.banner4 && (
				<div div className={styles.banner}>
					<picture>
						<img src={project.banner4} alt="" />
					</picture>
				</div>
			)}
		</main>
	);
};

export default Projects;

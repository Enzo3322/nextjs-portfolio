import { ProjectsArr } from '../mock';

import styles from '../styles/projects.module.scss';
import { Cards } from '../components/Cards';
import { FadeWrapper } from '../components/FadeWrapper';
const Project = () => {
	return (
		<FadeWrapper>
			<main className={styles.projects_main}>
				<h1>Todos os projetos</h1>
				<Cards projects={ProjectsArr} />
			</main>
		</FadeWrapper>
	);
};

export default Project;

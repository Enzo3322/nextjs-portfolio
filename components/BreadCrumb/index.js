import styles from './styles.module.scss';
import Link from 'next/link'

export const BreadCrumb = () => {
	return (
		<>
			<div className={styles.breadcrumbContainer}>
				<Link href='/' ><a> home</a></Link>
				<>/</>
				<Link href='/projects'><a>projects</a></Link>
			</div>
		</>
	);
};

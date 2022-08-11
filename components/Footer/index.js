import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from '../../assets/icons';
import styles from './styles.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_top}>
				<div className={styles.col_1}>
					<p>Enzo Spagnolli</p>
				</div>
				<div className={styles.col_2}>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about/">About</Link>
						</li>
						<li>
							<Link href="/projects/">Projects</Link>
						</li>
					</ul>
				</div>
				<div className={styles.col_3}>
					<ul>
						<li>Contact</li>
						<li>
							<Link href="mailto:enzo.spag14@gmail.com">Email</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/in/enzospagnolli/">
								Linkedin
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.col_4}>
					<ul>
						<li>Social</li>
						<li className={styles.social}>
							<Link href="#">
								<Facebook />
							</Link>
							<Link href="https://www.linkedin.com/in/enzospagnolli/">
								<Linkedin />
							</Link>
							<Link href="https://www.instagram.com/_enzospagnolli/">
								<Instagram />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.footer_bottom}>
				<p>© 2022 Enzo Spagnolli</p>
			</div>
		</footer>
	);
};

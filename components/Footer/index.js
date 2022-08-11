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
						<li>Home</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
					</ul>
				</div>
				<div className={styles.col_3}>
					<ul>
						<li>Contact</li>
						<li>
							<a href="#">Email</a>
						</li>
						<li>
							<a href="#">Linkedin</a>
						</li>
					</ul>
				</div>
				<div className={styles.col_4}>
					<ul>
						<li>Social</li>
						<div className={styles.social}>
							<a href="#">
								<Facebook />
							</a>
							<a href="https://www.linkedin.com/in/enzospagnolli/">
								<Linkedin />
							</a>
							<a href="https://www.instagram.com/_enzospagnolli/">
								<Instagram />
							</a>
						</div>
					</ul>
				</div>
			</div>
			<div className={styles.footer_bottom}>
				<p>© 2022 Enzo Spagnolli</p>
			</div>
		</footer>
	);
};

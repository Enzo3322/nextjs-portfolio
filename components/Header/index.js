import { useEffect, useState } from 'react';
import { Close, Open } from '../../assets/icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';
export const Header = () => {
	const [show, setShow] = useState(false);
	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 640) {
			setMobile(false);
		} else {
			setMobile(true);
		}
	}, []);

	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles.action}>
					<Link href="/">Enzo Spagnolli</Link>
					{isMobile && (
						<button
							className={styles.open_menu}
							onClick={() => {
								setShow(!show);
							}}
						>
							{show ? <Close /> : <Open />}
						</button>
					)}
				</div>
				<motion.ul
					animate={{ left: show ? 0 : -500 }}
					initial={{ left: -700 }}
					transition={{ duration: 0.8 }}
					className={`${show ? styles.show : styles.hide}`}
				>
					<li>
						<Link href="/" onClick={() => setShow(false)}>
							Home
						</Link>
					</li>
					<li>
						<Link href="sobre" onClick={() => setShow(false)}>
							About
						</Link>
					</li>
					<li>
						<Link href="projetos" onClick={() => setShow(false)}>
							Projects
						</Link>
					</li>
					<li>
						<Link href="contato" onClick={() => setShow(false)}>
							Contact
						</Link>
					</li>
				</motion.ul>
			</nav>
		</header>
	);
};

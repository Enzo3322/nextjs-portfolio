import { useEffect, useState } from 'react';
import { Close, Open } from '../../assets/icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

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
	const router = useRouter();
	const handleClick = (href) => {
		router.push(href);
		setShow(false);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles.action}>
					<motion.button
						transition={{ duration: 0.2 }}
						whileHover={{ scale: 1.1 }}
						onClick={() => handleClick('/')}
					>
						Enzo Spagnolli
					</motion.button>
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
						<motion.button
							transition={{ duration: 0.2 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => handleClick('/')}
						>
							Home
						</motion.button>
					</li>
					<li>
						<motion.button
							transition={{ duration: 0.2 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => handleClick('/about')}
						>
							About
						</motion.button>
					</li>
					<li>
						<motion.button
							transition={{ duration: 0.2 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => handleClick('/projects')}
						>
							Projects
						</motion.button>
					</li>
					<li>
						<motion.button
							transition={{ duration: 0.2 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => handleClick('/contact')}
						>
							Contact
						</motion.button>
					</li>
				</motion.ul>
			</nav>
		</header>
	);
};

import styles from './styles.module.scss';

export const Flags = ({ flagsArr }) => {
	if (!flagsArr) return null;

	function getRandomRgb() {
		const num = Math.round(0xffffff * Math.random());
		const r = num >> 16;
		const g = (num >> 8) & 255;
		const b = num & 255;
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}

	return (
		<ul className={styles.flag_container}>
			{flagsArr.map((flag, i) => (
				<li key={i} style={{ backgroundColor: getRandomRgb() }}>
					{flag.name}
				</li>
			))}
		</ul>
	);
};

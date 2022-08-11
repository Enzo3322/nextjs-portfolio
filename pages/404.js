import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<h2>Oopss... this page does exists</h2>
			<h3>Something goes wrong</h3>
			<Link href="/">Back to home</Link>
		</>
	);
};

export default NotFound;

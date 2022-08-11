import styles from '../styles/contact.module.scss';
import { Form } from '../components/Form';

export default function Contact() {
	return (
		<section className={styles.contact}>
			<h2>Contact</h2>
			<p>If you are interested in my work send me a message!</p>
			<Form />
		</section>
	);
}

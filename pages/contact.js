import styles from '../styles/contact.module.scss';
import { Form } from '../components/Form';

export default function Contact() {
	return (
		<section className={styles.contact}>
			<h2>Contato</h2>
			<p>Se estiver interessado no meu trabalho me envie uma mensagem!</p>
			<Form />
		</section>
	);
}

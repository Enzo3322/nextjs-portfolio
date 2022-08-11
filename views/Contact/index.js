import './styles.scss';
import { Form } from './Form';

export const Contact = () => {
	return (
		<section className="contact">
			<h2>Contato</h2>
			<p>Se estiver interessado no meu trabalho me envie uma mensagem!</p>
			<Form />
		</section>
	);
};

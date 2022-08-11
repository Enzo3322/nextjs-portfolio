import React from 'react';

export const Form = () => {
	return (
		<form action="">
			<label htmlFor="User">Full Name</label>
			<input
				type="text"
				id="User"
				name="Name"
				required
				placeholder="Jhon Doe"
			/>

			<label htmlFor="Email">Email</label>
			<input
				type="text"
				id="Email"
				name="Email"
				required
				placeholder="example@gmail.com"
			/>

			<label htmlFor="Message">Message</label>
			<textarea
				id="Message"
				name="Message"
				required
				placeholder="Hey..."
				maxLength={430}
			/>

			<button type="submit">Send</button>
		</form>
	);
};

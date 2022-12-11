import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const FadeWrapper = ({ children }) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 1.2 }, left: 0 },
		hidden: { opacity: 0 },
	};
	useEffect(() => {
		if (inView) {
			control.start('visible');
		}
	}, [control, inView]);

	return (
		<motion.div
			ref={ref}
			variants={boxVariant}
			animate={control}
			initial="hidden"
		>
			{children}
		</motion.div>
	);
};

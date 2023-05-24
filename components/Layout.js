import { motion } from 'framer-motion';

const Layout = ({ children }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 40,
				transition: {
					duration: 0.5
				}
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.5
					// delay: 0.5
				}
			}}
			exit={{
				opacity: 0,
				y: 40,
				transition: {
					duration: 0.5
				}
			}}
		>
			{children}
		</motion.div>
	);
};

export default Layout;

import '@/styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
	const { asPath } = useRouter();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={asPath}
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
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence>
	);
}

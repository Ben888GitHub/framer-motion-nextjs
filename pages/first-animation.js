import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const FirstAnimation = () => {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-16 ${inter.className}`}
		>
			<motion.p
				initial={{ scale: 1 }}
				animate={{ rotate: [0, 360, 360], y: [0, 200, 200] }}
				transition={{
					type: 'spring',
					duration: 1,
					repeat: 1,
					repeatType: 'reverse', // Reverse the animation after each repeat
					yoyo: true //
				}}
				className="text-4xl"
			>
				Hello World
			</motion.p>
		</main>
	);
};

export default FirstAnimation;

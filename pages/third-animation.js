import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const ThirdAnimation = () => {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-16 ${inter.className}`}
		>
			<p className="text-4xl">Third Animation</p>
		</main>
	);
};

export default ThirdAnimation;

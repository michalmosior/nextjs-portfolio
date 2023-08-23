import Nav from '@/components/Navigation/Nav';
import './globals.css';
import type { Metadata } from 'next';
import { Chivo_Mono } from 'next/font/google';

const ChivoMono = Chivo_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const layoutClass:string = 'app'
 
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${ChivoMono.className} ${layoutClass}`}>
				<Nav />
				{children}
			</body>
		</html>
	);
}

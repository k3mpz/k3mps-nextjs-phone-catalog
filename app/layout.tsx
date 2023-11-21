import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Phone Catalog',
	description: 'Phone Catalog',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
					<main className="container mx-auto">
						<div className="align-middle">
							<div className="p-5">{children}</div>
						</div>
					</main>
			</body>
		</html>
	)
}

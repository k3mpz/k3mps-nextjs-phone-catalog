import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

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
		<html lang="en" theme-data="synthwave">
			<body className={inter.className}>
					<NavBar />
					<main className="container mx-auto">
						<div className="flex flex-row">
							<div className="basis-1/4 pr-5">
								<SideBar />
							</div>
							<div className="basis-3/4 p-5">{children}</div>
						</div>
					</main>
			</body>
		</html>
	)
}

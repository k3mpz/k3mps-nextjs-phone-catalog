'use client'
import { usePathname } from 'next/navigation'

const NavBar = () => {
	return (
	

		<div className="navbar bg-neutral-300">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Phone Catalog</a>
			</div>
		</div>
	)
}

export default NavBar
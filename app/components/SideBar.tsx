'use client'

import { FaUsers, FaHouseUser, FaBook } from 'react-icons/fa'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const SideBar = () => {
	const pathName = usePathname()
	const pathNames = pathName.split("/");
	const route = pathNames[1];

	return (
		(
			route == 'login' ? 
			(
				<></>
			) :
			(
				<ul className="menu bg-base-200">
					<li>
						<Link href={`/`} className={route == '' ? 'active' : ''}>
							<FaHouseUser /> Dashboard
						</Link>
					</li>
					<li >
						<Link href={`/phones`} className={route == 'list' ? 'active' : ''}>
							<FaBook /> Phone List
						</Link>
					</li>
				</ul>
			)
		)
	)
}

export default SideBar
import PhoneItem from '../../phones/components/PhoneItem'
import { Phone } from '@prisma/client'
import Link from 'next/link';

const PhoneList = ({ phones }: { phones: Phone[] }) => {
	return (
		<div className="flex flex-col">
			<div className="-m-1.5 overflow-x-auto">
				<div className="p-1.5 min-w-full inline-block align-middle">
					<button
						className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-2"
						type="button"
					>
						<Link href={`/phones/create`}>
							Create
						</Link>
					</button>
					<div className="overflow-hidden">
						<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
							<thead>
								<tr>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Name</th>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Manufacturer</th>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CPU Name</th>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">RAM</th>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ROM</th>
									<th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">5G LTE Enabled</th>
									<th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
								{phones.map(phone => (
									<PhoneItem 
										key={phone.id}
										{...phone} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhoneList
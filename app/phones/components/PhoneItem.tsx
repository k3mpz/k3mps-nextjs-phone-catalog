import Link from 'next/link';
import { Phone } from "@prisma/client";
import DeleteButton from '@/app/phones/components/DeleteButton';
import { FaBook, FaPencilAlt } from 'react-icons/fa'

const PhoneItem = ({ id, name, manufacturer_name, cpu_name, ram, rom, has_5glte }: Phone) => {
	return (
		<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
					<p className="text-blue-600">{name}</p>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{manufacturer_name}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{cpu_name}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ram}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{rom}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{has_5glte?"Yes":"No"}</td>
			<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
				<button
					className="text-teal-500 mr-2">
					<Link href={`/phones/update/${id}`}>
						<FaPencilAlt />
					</Link>
				</button>
				<DeleteButton
					id={id} />


			</td>
		</tr>
	)
}

export default PhoneItem
import Link from 'next/link'
import SubmitButton from '../../../components/SubmitButton'
import { FaArrowLeft } from "react-icons/fa"
import { updatePhone } from '../../actions'
import { getPhone } from '../../../models/phone'

const UpdatePage = async ({ params }: { params: { phoneId: string } }) => {
	const phone = await getPhone(params.phoneId);
	const { id, name, manufacturer_name, cpu_name, ram, rom, has_5glte } = {...phone};
	return (
			<form
				action={updatePhone}>
				<div
					className="mb-6">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Phone Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						defaultValue={name??""}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required />
				</div>
				<div
					className="mb-6">
					<label
						htmlFor="manufacturer_name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Manufacturer
					</label>
					<input
						type="text"
						id="manufacturer_name"
						name="manufacturer_name"
						defaultValue={manufacturer_name??""}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required />
				</div>
				<div
					className="mb-6">
					<label
						htmlFor="cpu_name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						CPU Name
					</label>
					<input
						type="text"
						id="cpu_name"
						name="cpu_name"
						defaultValue={cpu_name??""}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required />
				</div>
				<div
					className="mb-6">
					<label
						htmlFor="ram"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						RAM Size
					</label>
					<input
						type="text"
						id="ram"
						name="ram"
						defaultValue={ram??""}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required />
				</div>
				<div
					className="mb-6">
					<label
						htmlFor="title"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						ROM Size
					</label>
					<input
						type="text"
						id="rom"
						name="rom"
						defaultValue={rom??""}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required />
				</div>
				<div
					className="mb-6">
					<label
						htmlFor="has_5glte"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						5G LTE Enabled
					</label>
					<input
						type="checkbox"
						id="has_5glte"
						name="has_5glte"
						value="1"
						checked={has_5glte==="1"?true:false}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						 />
				</div>
				<input
					type="hidden"
					id="id"
					name="id"
					value={id}
				/>
				<button
					className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-2"
					type="button"
				>
					<Link href={`/phones`}>
						<FaArrowLeft size={20} /> 
					</Link>
				</button>
				<SubmitButton />
			</form>
	);
}

export default UpdatePage


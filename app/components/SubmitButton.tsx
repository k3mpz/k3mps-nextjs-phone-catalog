'use client'

import { useFormStatus } from "react-dom";
import { FaSpinner, FaSave } from "react-icons/fa"

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			className="btn btn-primary"
			type="submit"
			aria-disabled={pending}
			disabled={pending}
		>{pending ? (<div className="animate-spin"><FaSpinner size={20} /></div>) : <FaSave size={20} />}
		</button>
	)
	 
}

export default SubmitButton
'use client'

import { deletePhoneById } from '../../phones/actions'
import { useTransition } from 'react'
import { FaSpinner, FaTrash } from 'react-icons/fa'

const DeleteButton = ({ id }: { id: string }) => {
    const [isPending, startTransition] = useTransition()
    const onDelete = () => {
        if (confirm('Are you sure want to delete this?')) {
            startTransition(() => {
                deletePhoneById(id)
            })
        }
    }

    return (
		<button 
			className="text-red-400"
			onClick={onDelete} 
			disabled={isPending}>
				{!isPending ? 
				(<FaTrash />) : 
				(<div className="animate-spin"><FaSpinner /></div>)}
		</button>
    )
}

export default DeleteButton
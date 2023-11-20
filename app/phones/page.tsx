import { getPhones } from '@/app/models/phone'
import PhoneList from '@/app/phones/components/PhoneList'

export default async function Phones() {
	const phones = await getPhones();

	return (
		<PhoneList 
			phones={phones}
		/>
	)
}

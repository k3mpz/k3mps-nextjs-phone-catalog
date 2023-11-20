import { getPhones } from '../models/phone'
import PhoneList from '../phones/components/PhoneList'

export default async function Phones() {
	const phones = await getPhones();

	return (
		<PhoneList 
			phones={phones}
		/>
	)
}

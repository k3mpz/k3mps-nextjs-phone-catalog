'use server'

import { prisma } from "../../utils/db"
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation";

export const createPhone = async (data: FormData) => {
	const name = data.get("name");
	const manufacturer_name = data.get("manufacturer_name");
	const cpu_name = data.get("cpu_name");
	const ram = data.get("ram");
	const rom = data.get("rom");
	const has_5glte = data.get("has_5glte");

	await prisma.phone.create({
		data: {
			name: name as string,
			manufacturer_name: manufacturer_name as string,
			cpu_name: cpu_name as string,
			ram: ram as string,
			rom: rom as string,
			has_5glte: has_5glte as string,
		},
	});

	revalidatePath("/phones");
	redirect("/phones");
}

export const updatePhone = async (data: FormData) => {
	const id = data.get('id');
	const name = data.get("name");
	const manufacturer_name = data.get("manufacturer_name");
	const cpu_name = data.get("cpu_name");
	const ram = data.get("ram");
	const rom = data.get("rom");
	const has_5glte = data.get("has_5glte");
  
	await prisma.phone.update({
		where: { id: id as string },
		data: {
			name: name as string,
			manufacturer_name: manufacturer_name as string,
			cpu_name: cpu_name as string,
			ram: ram as string,
			rom: rom as string,
			has_5glte: has_5glte as string,
		},
	});
	
	revalidatePath("/phones");
	redirect("/phones");
}

export const deletePhoneById = async(id: string) => {
    await prisma.phone.delete({ where: { id } })

	revalidatePath("/phones");
}

export const getPhoneById = async(id: string) => {
    const result = prisma.phone.findFirst({ where: { id } });
	return result;
}
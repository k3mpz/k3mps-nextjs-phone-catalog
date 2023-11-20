import { prisma } from "../../utils/db"

export const getPhone = (id: string) => {
	const response = prisma.phone.findFirst({ where: { id } });

	return response;
}

export const getPhones = () => {
	const response = prisma.phone.findMany();

	return response
}
import { revalidatePath } from "next/cache";

export default function Home() {
	revalidatePath("/phones");
	return (

		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Phone Catalog</h1>
					<p className="py-6">An app for cataloging phones and their specifications.</p>
				</div>
			</div>
		</div>

	)
}

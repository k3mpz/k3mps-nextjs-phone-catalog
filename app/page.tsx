import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function Home() {
	revalidatePath("/phones");
	return (
		<div className="hero min-h-screen">
			<div className="hero-content text-center">
				<div>
					<h1 className="text-5xl font-bold bm pb-6">Phone Catalog</h1>
					<Link href={`/phones`}>
						<button className="btn btn-primary">Phone List</button>
					</Link>
					<p className="py-6">An app for cataloging phones and their specifications.</p>
				</div>
			</div>
		</div>

	)
}

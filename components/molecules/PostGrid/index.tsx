import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog";

const PostGrid = ({ posts }: { posts: BlogPost[] }) => (
	<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		{posts.map((post) => (
			<article
				key={post.slug}
				className="bg-white rounded-xl shadow-findBox overflow-hidden hover:shadow-lg transition-shadow"
			>
				<Link href={`/blog/${post.slug}`} className="block">
					<div className="relative h-48 w-full">
						<Image
							src={post.image}
							alt={post.title}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
							className="object-cover"
						/>
					</div>
					<div className="p-5">
						<span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-3">
							{post.category}
						</span>
						<h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
							{post.title}
						</h2>
						<p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.description}</p>
						<div className="flex items-center justify-between text-xs text-gray-500">
							<span>{post.readingTime} min de lectura</span>
							<time dateTime={post.publishedAt}>
								{new Date(post.publishedAt).toLocaleDateString("es-ES", {
									day: "numeric",
									month: "short",
									year: "numeric",
								})}
							</time>
						</div>
					</div>
				</Link>
			</article>
		))}
	</div>
);

export default PostGrid;

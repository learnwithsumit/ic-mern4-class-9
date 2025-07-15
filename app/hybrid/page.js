import SinglePost from "@/components/SinglePost";
import { getData } from "@/lib/getData";
import { Suspense } from "react";

// export const dynamic = "force-dynamic";

export default async function Hybrid() {
    const posts = await getData("http://localhost:8000/posts");

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Hybrid Page</h1>
            <div>
                <ul className="flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5">
                    {posts.map((post) => (
                        <li key={post.id} className="pl-2">
                            {post.title}
                        </li>
                    ))}
                </ul>

                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis omnis debitis optio est labore laboriosam
                    voluptatibus ullam numquam, id eum fuga illum, a veritatis
                    dolores nihil rerum? Inventore, sunt nihil.
                </div>

                <hr />

                <Suspense
                    fallback={
                        <div>
                            <h1>Loading single post...</h1>
                        </div>
                    }
                >
                    <SinglePost />
                </Suspense>
            </div>
        </div>
    );
}

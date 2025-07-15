import { Suspense } from "react";
import PostCard from "./post-card"; // here we can import client component
import PostUser from "./post-user";
import PostWithMarkdown from "./post-with-markdown";

export default async function PostList() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await res.json();

    return (
        <div className="flex flex-col gap-10">
            {posts.map((p) => (
                <PostCard key={p.id} postId={p.id}>
                    <Suspense
                        fallback={
                            <div>
                                <h1 className="text-orange-300">
                                    Loading user...
                                </h1>
                            </div>
                        }
                    >
                        <PostUser userId={p.userId} />
                    </Suspense>
                    <PostWithMarkdown text="some text here" />
                </PostCard>
            ))}
        </div>
    );
}

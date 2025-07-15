import PostCard from "./post-card";
import PostUser from "./post-user";
import PostWithMarkdown from "./post-with-markdown";

export default async function PostList() {
    return (
        <div className="flex flex-col gap-10">
            <PostCard>
                <PostUser />
                <PostWithMarkdown text="some text here" />
            </PostCard>
        </div>
    );
}

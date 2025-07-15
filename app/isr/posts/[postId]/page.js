export default async function Post() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Post title</h1>
            <div>{post.body}</div>
        </div>
    );
}

export default async function Posts() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold">Posts page</h1>
            <div>
                <ul className="flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5">
                    <li className="pl-2">Post title 1</li>
                    <li className="pl-2">Post title 2</li>
                    <li className="pl-2">Post title 3</li>
                    <li className="pl-2">Post title 4</li>
                </ul>
            </div>
        </div>
    );
}

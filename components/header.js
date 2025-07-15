import Link from "next/link";

export default function Header() {
    return (
        <div className="py-6">
            <ul className="flex gap-6">
                <li>
                    <Link href="/" prefetch={false}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/static" prefetch={false}>
                        Static
                    </Link>
                </li>
                <li>
                    <Link href="/dynamic" prefetch={false}>
                        Dynamic
                    </Link>
                </li>
                <li>
                    <Link href="/hybrid" prefetch={false}>
                        Hybrid
                    </Link>
                </li>
                <li>
                    <Link href="/isr/posts" prefetch={false}>
                        ISR
                    </Link>
                </li>
                <li>
                    <Link href="/rsc" prefetch={false}>
                        RSC
                    </Link>
                </li>
            </ul>
        </div>
    );
}

import './stile.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            Home
            <br />
            <Link href="/">Ir Home</Link>
        </div>
    );
}
import './stile.css';
import Link from 'next/link';
import Talleres from '@/components/Talleres';

export default function Home() {
    return (
        <div>
            Home
            <br />
            <Link href="/">Ir Home</Link>
            <Talleres/>

        </div>
    );
}
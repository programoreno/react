import './css/stiles.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>Hola mundo</p>
      <Link href="/home">Ir a Home</Link>
      <Link href="/about">Ir a About</Link>
    </div>
  );
}

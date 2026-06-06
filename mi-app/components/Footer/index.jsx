import Button from "@/components/ui/Buttons";
import "./Footer.css";
import Link from 'next/link';

export default function Footer() {
    return (
        <section>
            Footer

            <Button>Saber más</Button>
            <Link href="/">Inicio</Link>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            {/* <Button type="submit">Enviar formulario</Button> */}
        </section>
    );
}
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-yellow-500 px-4 rounded">
                <div className="flex-grow py-6 px-2 justify-start">
                    <Image
                        src="/images/icon.png"
                        width={50}
                        height={50}
                        alt="Icon Team"
                    ></Image>
                </div>

                <div className="flex-grow py-4 justify-start text-lg">
                    <h2 className="py-2"><strong>O Clube</strong></h2>

                    <p><Link href="#">Nossa História</Link></p>
                    <p><Link href="#">Fundação</Link></p>
                    <p><Link href="#">Conquistas</Link></p>
                    <p><Link href="#">Fale Conosco</Link></p>
                </div>
                <div className="flex-grow py-4 justify-start text-lg">
                    <h2 className="py-2"><strong>Futebol</strong></h2>

                    <p><Link href="#">Campeonato Amazonense Série A</Link></p>
                    <p><Link href="#">Campeonato Amazonense Sub-10</Link></p>
                    <p><Link href="#">Campeonato Amazonense Sub-14</Link></p>
                    <p><Link href="#">Campeonato Brasileiro Série B</Link></p>
                </div>
                <div className="flex-grow py-4 justify-start text-lg">
                    <h2 className="py-2"><strong>AmazonasFC</strong></h2>

                    <p><Link href="#">TV Onça</Link></p>
                    <p><Link href="#">Loja</Link></p>
                    <p><Link href="#">Galeria</Link></p>
                </div>
                <div className="flex-grow py-4 justify-start text-lg">
                    <h2 className="py-2"><strong>Associados</strong></h2>

                    <p><Link href="#">Sócio da Onça</Link></p>
                    <p><Link href="#">Área do Sócio</Link></p>
                </div>
            </div>
        </>
    )
}

export default Footer;

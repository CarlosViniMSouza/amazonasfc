import Image from "next/image";
import Link from "next/link";

function SectionA() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black">
                    <strong>2019 - Barezão Série B</strong>
                </p>
            </div>

            <div id="container" className="bg-gray-700 items-center justify-center justify-self-auto">
                <div className="flex-grow flex-col lg:flex-row p-4 m-4">
                    <Image
                        src="/achievements/imgA.jpg"
                        width={1000}
                        height={1000}
                        alt="Conquista do Barezão Série B 2019"
                        className="max-h-full m-auto rounded-md mb-4"
                    ></Image>

                    <div className="p-2 border-2 border-white border-solid lg:w-[70%] lg:m-auto lg:rounded-md">
                        <h2 className="text-3xl mb-4 text-center"> <strong> Primeira Conquista do Amazonas FC </strong> </h2>
                        <p className="text-2xl mb-4"> A Onça rugiu mais alto no Estádio da Colina. </p>
                        <p className="text-2xl mb-4"> Mesmo com um jogador a menos durante todo o segundo tempo, o Amazonas FC devorou o São Raimundo em seu quintal e conquista o Campeonato Amazonense da Série B. </p>
                        <p className="text-2xl"> Com gols de Daivison, Bacas e Dioguinho, o Amazonas, com menos de seis meses de fundação, carimba seu acesso à elite do futebol Baré com o troféu de campeão estadual da segunda divisão. </p>
                        <blockquote className="text-xl mt-2">
                            <Link href="https://www.acritica.com/esportes/amazonas-fc-vence-s-o-raimundo-e-conquista-titulo-do-barez-o-serie-b-1.54483">
                                <i>Fonte: acritica notícias</i>
                            </Link>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionA;

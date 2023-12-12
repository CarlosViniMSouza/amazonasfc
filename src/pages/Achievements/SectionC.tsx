import Image from "next/image";
import Link from "next/link";

function SectionC() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black">
                    <strong>2023 - Brasileirão Série C</strong>
                </p>
            </div>

            <div id="container" className="bg-gray-700 items-center justify-center justify-self-auto">
                <div className="flex-grow flex-col lg:flex-row p-4 m-4">
                    <Image
                        src="/achievements/imgC.jpg"
                        width={1000}
                        height={1000}
                        alt="Conquista do Brasileirão Série C 2023"
                        className="max-h-full m-auto rounded-md mb-4"
                    ></Image>

                    <div className="p-2 border-2 border-white border-solid lg:w-[70%] lg:m-auto lg:rounded-md">
                        <h2 className="text-3xl mb-4 text-center"> <strong> Primeira conquista Nacional do Amazonas FC e do estado amazonense </strong> </h2>
                        <p className="text-2xl mb-4"> Com um gol do veterano Sassá, o Amazonas FC sagrou-se o campeão da Série C do Brasileiro-2023. </p>
                        <p className="text-2xl mb-4"> A conquista nacional, inédita para o clube e para o futebol amazonense, veio neste domingo (22/10), após a vitória por 2 a 1, de virada, sobre o Brusque, na casa dos catarinenses, o Augusto Bauer (a ida, na Arena da Amazônia, foi 0 a 0). </p>
                        <p className="text-2xl mb-4"> A equipe catarinense abriu o placar no começo da partida, porém o Amazonas virou com Diego Torres, e sacramentou a vitória com Sassá aos 12 min 2T. </p>
                        <p className="text-2xl"> Rumo a Série B do Brasileirão 2024. </p>
                        <blockquote className="text-xl mt-2">
                            <Link href="https://www.terra.com.br/esportes/futebol/sassa-decide-e-amazonas-e-o-campeao-da-serie-c-do-brasileirao,09944d38fa0344dc11ab2c976febb566uceum464.html?utm_source=clipboard">
                                <i>Fonte: Portal Terra</i>
                            </Link>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionC;

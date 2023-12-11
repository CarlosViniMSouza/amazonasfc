import Image from "next/image";
import Link from "next/link";

function SectionB() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black">
                    <strong>2023 - Barezão Série A</strong>
                </p>
            </div>

            <div id="container" className="bg-gray-700 items-center justify-center justify-self-auto text-center">
                <div className="flex-grow flex-col lg:flex-row p-4 m-4">
                    <Image
                        src="/achievements/imgB.jpeg"
                        width={1000}
                        height={1000}
                        alt="Conquista do Barezão Série A 2022"
                        className="max-h-full m-auto rounded-md"
                    ></Image>

                    <div className="p-2 m-2">
                        <h2 className="text-3xl mb-4"> <strong> Primeira Conquista do Amazonas FC </strong> </h2>
                        <p className="text-2xl mb-4"> A 107ª edição do Campeonato Amazonense de Futebol Profissional Série A chegou ao fim, com o Amazonas Futebol Clube levantando a taça de campeão pela primeira vez na história. </p>
                        <p className="text-2xl mb-4"> A equipe aurinegra venceu o Manauara EC por 1 a 0, com gol de Luan.  </p>
                        <p className="text-2xl"> O nome dos troféus de campeão e vice é uma homenagem ao ex-governador do Amazonas, Amazonino Mendes, que faleceu no dia 12 de fevereiro de 2023, aos 83 anos. </p>
                        <blockquote className="text-xl mt-2">
                            <Link href="https://www.fafamazonas.com.br/site/noticia/amazonas-fc-e-o-campeao-do-barezao-2023/">
                                <i>Fonte: FAF Amazonas</i>
                            </Link>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionB;

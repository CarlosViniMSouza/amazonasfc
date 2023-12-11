import Image from "next/image";

function SectionMiddle() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black ">
                    <strong>2022 - Série D</strong>
                </p>
            </div>

            <div id="container" className="bg-gray-700 items-center justify-center justify-self-auto text-center">
                <div className="flex-grow flex-col lg:flex-row p-4 m-4">
                    <Image
                        src="/gallery/img08.jpg"
                        width={1000}
                        height={1000}
                        alt="Imagem em Comemoração ao Dia da Consciência Negra"
                        className="object-scale-down max-h-full m-auto rounded-md"
                    ></Image>

                    <div className="p-2 m-2">
                        <h2 className="text-3xl mb-4"> <strong> Primeira Disputa Nacional do Time em 2021 </strong> </h2>
                        <p className="text-2xl mb-4"> Logo em sua primeira partição, o AM.F.C. venceu diversos clubes conhecidos do futebol. </p>
                        <p className="text-2xl mb-4"> Chegando até as semifinais da competição, aonde seria eliminado pelo Pouse Alegre - MG. </p>
                        <p className="text-2xl"> Apesar da eliminação, garantiu 1 das 4 vagas para a Série C do Brasileirão de 2023. E aqui seria um ponto de virada inesquecível! </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionMiddle;

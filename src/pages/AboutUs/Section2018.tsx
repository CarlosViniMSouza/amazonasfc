import Image from "next/image";

function SectionInit() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black">
                    <strong>2018 - Surgimento do Clube</strong>
                </p>
            </div>

            <div id="container" className="bg-gray-700 items-center justify-center justify-self-auto text-center">
                <div className="flex-grow flex-col lg:flex-row p-4 m-4">
                    <Image
                        src="/gallery/img07.jpg"
                        width={1000}
                        height={1000}
                        alt="Imagem da Primeira Partida da Final da Série C 2023"
                        className="object-scale-down max-h-full m-auto rounded-md"
                    ></Image>

                    <div className="p-2 m-2">
                        <h2 className="text-3xl mb-4"> <strong> Surge o Amazonas FC em meados de 2018. </strong> </h2>
                        <p className="text-2xl mb-4"> Fundado por ex-diretores de clubes tradicionais do Amazonas, o Amazonas FC surge para renovar o futebol local. </p>
                        <p className="text-2xl mb-4"> O que talvez ninguém esperava, era a proporção que a tal "renovação no futebol local" iria ocasionar. </p>
                        <p className="text-2xl"> Com inúmeros adversários e adversidades á espera, o AM.F.C. começa a sua história de conquistas e superação! </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionInit;

import Image from "next/image";

function SectionEnd() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black ">
                    <strong> 2023 - Série C </strong>
                </p>
            </div>

            <div id="container" className="bg-gray-700 items-center justify-center justify-self-auto text-center">
                <div className="flex-grow flex-col lg:flex-row p-4 m-4">
                    <Image
                        src="/gallery/img09.jpg"
                        width={1000}
                        height={1000}
                        alt="Imagem em Comemoração ao Dia da Consciência Negra"
                        className="object-scale-down max-h-full m-auto rounded-md"
                    ></Image>

                    <div className="p-2 m-2">
                        <h2 className="text-3xl mb-4"> <strong> Segunda Disputa Nacional da Onça </strong> </h2>
                        <p className="text-2xl mb-4"> Apesar da derrocada nas semifinais da Série D, o Amazonas se reconstruiu para a Série C. </p>
                        <p className="text-2xl mb-4"> Novamente, enfrentando clubes tradicionais do Futebol Brasileiro, o time auri-negro chegou no Quadrangular Final. </p>
                        <p className="text-2xl mb-4"> Apesar do mal começo na fase final, o clube venceu os 4 jogos seguidos e garantiu vaga na Grande Final contra o Brusque-SC. </p>
                        <p className="text-2xl mb-4"> Os resultados: Empate na Arena da Amazônia (0x0) | Vitória da Onça na casa do Brusque, de virada (2x1) </p>
                        <p className="text-2xl mb-4"> Consagrando-se a Primeira Equipe Amazonense a vencer um Torneio Nacional, e um acesso Histórico á Série B do Brasileirão. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionEnd;

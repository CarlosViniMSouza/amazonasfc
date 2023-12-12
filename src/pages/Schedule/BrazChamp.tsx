import Image from "next/image";

function BrazChamp() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black ">
                    <strong>Campeoanto Brasileiro Série B</strong>
                </p>
            </div>

            <div className="bg-gray-700 mb-4">
                <Image
                    src="/schedules/braz-champ-trophy.png"
                    width={1000}
                    height={1000}
                    alt="Taça Camp. Bras. Série B"
                    className="w-[25%] max-h-full m-auto"
                ></Image>

                <p className="text-3xl text-center mt-4"> A definir ...</p>
            </div>
        </>
    )
}

export default BrazChamp;

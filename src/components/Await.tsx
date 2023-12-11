import Image from "next/image";
import Link from "next/link";

function Await() {
    return (
        <>
            <div className="flex flex-col bg-gray-500 items-center justify-center text-center p-4 px-4 py-20">
                <Link href="/"><Image
                    width={500}
                    height={500}
                    alt="icon"
                    src="/icons/icon.png"
                    className="w-full h-auto object-cover rounded"
                ></Image></Link>

                <div className="mt-2 ml-2 lg:mt-4 lg:ml-4">
                    <h1 className="text-3xl"> <strong> Em contrução! </strong></h1>

                    <h2 className="text-2xl"> Aguardem, por favor! </h2>
                </div>
            </div>
        </>
    )
}

export default Await;

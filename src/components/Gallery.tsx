import Image from "next/image";

function Gallery() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black ">
                    <strong>Galeria - Melhores Momentos</strong>
                </p>
            </div>

            <div className="flex flex-col bg-gray-700 lg:flex-row px-4 py-2 rounded">
                <div className="flex-grow py-4 justify-start">
                    <Image
                        src="/images/img04.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full mb-2 h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/images/img03.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full mb-2 h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/images/img02.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full mb-2 h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/images/img01.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>
            </div>
        </>
    )
}

export default Gallery;

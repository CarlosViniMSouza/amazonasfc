import Image from "next/image";

function Gallery() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black ">
                    <strong>Galeria - Melhores Momentos</strong>
                </p>
            </div>

            <div className="flex flex-col flex-grow mr-2 mb-2 bg-gray-700 px-4 py-2 rounded">
                <div className="grid grid-cols-2 gap-2 mb-2">
                    <Image
                        src="/gallery/img04.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/gallery/img03.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                    <Image
                        src="/gallery/img02.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/gallery/img01.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Image
                        src="/gallery/img05.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/gallery/img06.jpg"
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

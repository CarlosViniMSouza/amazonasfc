import Image from "next/image";

function Sponsors() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black">
                    <strong> Alguns Patrocinadores </strong>
                </p>
            </div>

            <div className="flex flex-col flex-grow bg-gray-700 px-4 py-2 rounded">
                <div className="grid grid-cols-3 gap-3 rounded">
                    <Image
                        src="/sponsors/sponsor01.png"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/sponsors/sponsor02.png"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/sponsors/sponsor06.jpg"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-3 rounded">
                    <Image
                        src="/sponsors/sponsor03.png"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>

                    <Image
                        src="/sponsors/sponsor04.png"
                        width={1000}
                        height={1000}
                        alt="Team"
                        className="w-full h-auto object-cover rounded fill-current mt-4 mb-4"
                    ></Image>

                    <Image
                        src="/sponsors/sponsor05.jpg"
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

export default Sponsors;

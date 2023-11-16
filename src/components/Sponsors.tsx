import Image from "next/image";

function Sponsors() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black">
                    <strong> Nossos Patrocinadores </strong>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-gray-700 px-4 py-2 rounded">
                <div className="flex-grow py-4 justify-start">
                    <Image
                        src="/sponsors/sponsor01.png"
                        width={512}
                        height={512}
                        alt="Sponsor"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>
                <div className="flex-grow py-4 justify-start">
                    <Image
                        src="/sponsors/sponsor02.png"
                        width={512}
                        height={512}
                        alt="Sponsor"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>
                <div className="flex-grow py-4 justify-start">
                    <Image
                        src="/sponsors/sponsor03.png"
                        width={512}
                        height={512}
                        alt="Sponsor"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>
                <div className="flex-grow py-4 justify-start items-center">
                    <Image
                        src="/sponsors/sponsor04.png"
                        width={512}
                        height={512}
                        alt="Sponsor"
                        className="w-full h-auto object-cover rounded fill-current"
                    ></Image>
                </div>
            </div>
        </>
    )
}

export default Sponsors;

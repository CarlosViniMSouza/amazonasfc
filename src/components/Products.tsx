import Image from "next/image";

function Store() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black">
                    <strong> Nossa Loja </strong>
                </p>
            </div>

            <div className="bg-gray-700 px-4 py-2 rounded grid grid-cols-2 gap-2">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-grow py-4 mr-2 mb-2 border-solid border-white border-2 rounded justify-center">
                        <Image
                            src="/store/shirt01.png"
                            width={1000}
                            height={1000}
                            alt="Shirt"
                            className="w-full h-auto object-cover rounded fill-current"
                            ></Image>
                    </div>
                    <div className="flex flex-grow py-4 mr-2 mb-2 border-solid border-white border-2 rounded justify-center">
                        <Image
                            src="/store/shirt02.png"
                            width={1000}
                            height={1000}
                            alt="Shirt"
                            className="w-full h-auto object-cover rounded fill-current"
                            ></Image>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-grow py-4 mr-2 mb-2 border-solid border-white border-2 rounded justify-center">
                        <Image
                            src="/store/shirt03.png"
                            width={1000}
                            height={1000}
                            alt="Shirt"
                            className="w-full h-auto object-cover rounded fill-current"
                            ></Image>
                    </div>
                    <div className="flex flex-grow py-4 mr-2 mb-2 border-solid border-white border-2 rounded justify-center">
                        <Image
                            src="/store/shirt04.png"
                            width={1000}
                            height={1000}
                            alt="Shirt"
                            className="w-full h-auto object-cover rounded fill-current"
                            ></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store;

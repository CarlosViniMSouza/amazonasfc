import Image from "next/image";
import Link from "next/link";

function News() {
    return (
        <>
            <div className="border-solid border-black border-2 mx-auto w-[50%] rounded bg-white mt-3 mb-3">
                <p className="py-2 text-center text-lg text-black ">
                    <strong>Notícias mais Recentes</strong>
                </p>
            </div>

            <div className="flex-grow bg-gray-500 mx-auto rounded py-2">
                <div className="flex flex-col lg:flex-row items-center rounded border-2 border-solid border-white p-3 m-4">
                    <Image
                        src="/gallery/img03.jpg"
                        width={1000}
                        height={1000}
                        alt="news"
                        className="w-full lg:w-[25%] h-auto object-cover rounded"
                    ></Image>

                    <div className="mt-2 ml-2 lg:mt-4 lg:ml-4">
                        <h1 className="text-3xl"> <strong>Amazonas FC Campeão da Série C do Brasileirão</strong></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="mt-4 underline">
                            <Link href="#"> Saiba Mais (...) </Link>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center rounded border-2 border-solid border-white p-3 m-4">
                    <Image
                        src="/gallery/img05.jpg"
                        width={1000}
                        height={1000}
                        alt="news"
                        className="w-full lg:w-[25%] h-auto object-cover rounded"
                    ></Image>

                    <div className="mt-2 ml-2 lg:mt-4 lg:ml-4">
                        <h1 className="text-3xl"> <strong>Amazonas FC Campeão da SUB-16 do Barezinho</strong></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="mt-4 underline">
                            <Link href="#"> Saiba Mais (...) </Link>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center rounded border-2 border-solid border-white p-3 m-4">
                    <Image
                        src="/gallery/img06.jpg"
                        width={1000}
                        height={1000}
                        alt="news"
                        className="w-full lg:w-[25%] h-auto object-cover rounded"
                    ></Image>

                    <div className="mt-2 ml-2 lg:mt-4 lg:ml-4">
                        <h1 className="text-3xl"> <strong>Amazonas FC Campeão da SUB-14 do Barezinho</strong></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="mt-4 underline">
                            <Link href="#"> Saiba Mais (...) </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;

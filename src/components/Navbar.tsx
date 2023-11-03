import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

function Navbar() {
    return (
        <>
            <div className="bg-yellow-500">
                <nav className="flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Image
                            src="/images/icon.png"
                            width={50}
                            height={50}
                            alt="Icon Team"
                        ></Image>
                    </div>
                    <div className="block lg:hidden">
                        <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-white hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title> Menu </title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div id="nav-content" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <Link className="inline-block text-white no-underline hover:text-black py-2 px-4" href="#"> Casa </Link>
                            </li>
                            <li className="mr-3">
                                <Link className="inline-block text-white no-underline hover:text-black py-2 px-4" href="#"> Sobre </Link>
                            </li>
                            <li className="mr-3">
                                <Link className="inline-block text-white no-underline hover:text-black py-2 px-4" href="#"> Conquistas </Link>
                            </li>
                            <li className="mr-3">
                                <Link className="inline-block text-white no-underline hover:text-black py-2 px-4" href="#"> Contato </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Script
                strategy="worker"
                src="/scripts/hamburger-menu.js"
            />
        </>
    )
}

export default Navbar;

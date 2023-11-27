import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

function Navbar() {

    return (
        <>
            <div className="bg-yellow-500">
                <nav className="flex items-center justify-between flex-wrap p-4">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link href="https://amazonasfc.vercel.app/"><Image
                            src="/icons/icon.png"
                            width={50}
                            height={50}
                            alt="Icon Team"
                        ></Image></Link>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-white border-white"
                        >
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden" id="menu" x-cloak x-show="!isSmallScreen">
                        <ul className="list-reset lg:flex flex-1 justify-between items-center">
                            <li className="mr-3">
                                <Link href="/AboutUs/" className="inline-block text-white underline py-2 px-4"> Sobre Nós </Link>
                            </li>
                            <li className="mr-3">
                                <Link href="/Achievements/" className="inline-block text-white underline py-2 px-4"> Conquistas </Link>
                            </li>
                            <li className="mr-3">
                                <Link href="/Schedule/" className="inline-block text-white underline py-2 px-4"> Agenda </Link>
                            </li>
                            <li className="mr-3">
                                <Link href="/Store/" className="inline-block text-white underline py-2 px-4"> Loja Auri-Negra </Link>
                            </li>
                            <li className="mr-3">
                                <Link href="/News/" className="inline-block text-white underline py-2 px-4"> Notícias </Link>
                            </li>
                            <li className="mr-3">
                            <Link href="/SupporterMember/" className="inline-block text-white underline py-2 px-4"> Sócio-Torcedor </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Script
                strategy="lazyOnload"
                src="/scripts/hamburguer-menu.js"
            />
        </>
    )
}

export default Navbar;

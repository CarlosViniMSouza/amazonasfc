"use client";

import Image from "next/image";
import Script from "next/script";
import { useRouter } from 'next/navigation';

function Navbar() {
    const router = useRouter();

    return (
        <>
            <div className="bg-yellow-500">
                <nav className="flex items-center justify-between flex-wrap p-4">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Image
                            src="/icons/icon.png"
                            width={50}
                            height={50}
                            alt="Icon Team"
                        ></Image>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-white hover:text-white hover:border-white"
                        >
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div id="nav-content" className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0">
                        <ul className="list-reset lg:flex flex-1 justify-between items-center">
                            <li className="mr-3">
                                <button type="button" className="inline-block text-white underline py-2 px-4" onClick={() => router.push('/pages/aboutUs')}> Sobre Nós </button>
                            </li>
                            <li className="mr-3">
                                <button type="button" className="inline-block text-white underline py-2 px-4" onClick={() => router.push('/pages/')}> Conquistas </button>
                            </li>
                            <li className="mr-3">
                                <button type="button" className="inline-block text-white underline py-2 px-4" onClick={() => router.push('/pages/')}> Agenda </button>
                            </li>
                            <li className="mr-3">
                                <button type="button" className="inline-block text-white underline py-2 px-4" onClick={() => router.push('/pages/')}> Loja Auri-Negra </button>
                            </li>
                            <li className="mr-3">
                                <button type="button" className="inline-block text-white underline py-2 px-4" onClick={() => router.push('/pages/')}> Notícias </button>
                            </li>
                            <li className="mr-3">
                                <button type="button" className="inline-block text-white underline py-2 px-4" onClick={() => router.push('/pages/')}> Sócio-Torcedor </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Script
                strategy="lazyOnload"
                src="/scripts/hamburger-menu.js"
            />
        </>
    )
}

export default Navbar;

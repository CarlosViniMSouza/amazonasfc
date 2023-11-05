import Link from "next/link";

function Footer() {
    return (
        <>
            <div className="border-solid border-white border-2 mx-auto w-[50%] rounded">
                <p className="mb-0">
                    Site em contrução com Next.js e TailwindCSS por
                    <Link
                        href="https://cvmds-blog.vercel.app"
                        className="block lg:inline-block lg:mt-0 text-black hover:text-white ml-1 mr-1"
                        target="_blank"
                    >@CarlosSouza</Link>
                </p>

                <br></br>

                <p className="mb-0">
                    <Link
                        href="#"
                        className="block lg:inline-block lg:mt-0 text-black hover:text-white ml-1 mr-1"
                    >Voltar ao Topo</Link>
                </p>
            </div>
        </>
    )
}

export default Footer;

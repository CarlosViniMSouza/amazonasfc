import Head from "next/head";

import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Updates from "@/components/Updates";
import Sponsors from "@/components/Sponsors";
import Products from "@/components/Products";

export default function Home() {
    return (
        <>
            <Head>
                <title>Amazonas FC - A maior Torcida da Região Norte</title>

                <meta name="theme-color" content="#fff" />
                <meta property="og:url" content="https://amazonasfc.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:image"
                    content="https://github.com/CarlosViniMSouza/amazonasfc/blob/main/public/icons/icon.png?raw=true"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <link rel="manifest" href="/manifest.json" />
            </Head>

            <header>
                <Navbar />
            </header>

            <Updates />
            <Gallery />
            <Products />
            <Sponsors />

            <footer>
                <Footer/>
            </footer>
        </>
    )
     
}

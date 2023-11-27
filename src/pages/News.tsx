import '../app/globals.css';

import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Updates from '@/components/Updates';

function News() {
    return (
        <>
            <Head>
                <title>Amazonas FC - Notícias</title>

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

            <Updates/>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default News;

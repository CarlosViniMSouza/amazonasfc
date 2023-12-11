import '../app/globals.css';

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import SectionA from './AboutUs/SectionA';
import SectionB from './AboutUs/SectionB';
import SectionC from './AboutUs/SectionC';
import SectionD from './AboutUs/SectionD';

function AboutUs() {
    return (
        <>
            <Head>
                <title>Amazonas FC - Sobre Nós</title>

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

            <SectionA/>
            <SectionB/>
            <SectionC/>
            <SectionD/>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default AboutUs;

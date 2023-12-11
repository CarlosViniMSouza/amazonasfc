import '../app/globals.css';

import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Await from '@/components/Await';
import Section2018 from './AboutUs/Section2018';
import Section2022 from './AboutUs/Section2022';
import Section2023 from './AboutUs/Section2023';
import Section2024 from './AboutUs/Section2024';

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

            <Section2018/>
            <Section2022/>
            <Section2023/>
            <Section2024/>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default AboutUs;

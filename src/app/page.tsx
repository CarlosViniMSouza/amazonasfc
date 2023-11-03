import Navbar from "@/components/Navbar";
import Images from "@/components/Images";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <Images link="/images/img04.jpg" />
                <Images link="/images/img03.jpg" />
                <Images link="/images/img02.jpg" />
                <Images link="/images/img01.jpg" />

                <footer className="py-4 text-center text-lg bg-yellow-500">
                    <Footer />
                </footer>
            </body>
        </>
    )
}

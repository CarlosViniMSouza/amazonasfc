import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <Gallery/>

            <footer className="py-4 text-center text-lg bg-yellow-500">
                <Footer />
            </footer>
        </>
    )
}

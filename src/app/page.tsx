import Navbar from "@/components/Navbar";
import SubFooter from "@/components/SubFooter";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <Gallery/>

            <Footer/>
            <footer>
                <SubFooter />
            </footer>
        </>
    )
}

import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Planos from "../components/Planos"
import Sobre from "../components/Sobre"

export default function Home() {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Sobre/>
            <Planos/>
            <CTA/>
            <Footer/>
        </>
    )
}
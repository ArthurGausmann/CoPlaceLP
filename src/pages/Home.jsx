import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Sobre from "../components/Sobre"
import EnderecoFiscal from "../components/EnderecoFiscal"
import Clientes from "../components/Clientes"
import Planos from "../components/Planos"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home() {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Sobre/>
            <EnderecoFiscal/>
            <Planos/>
            <CTA/>
            <Footer/>
        </>
    )
}
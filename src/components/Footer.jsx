import logo from "../assets/logoCoPlace.png"
import { FaInstagram } from "react-icons/fa";

export default function Footer() {

  return (
    <footer id="contato" className="footer bgGreen sm:footer-horizontal bg-neutral text-neutral-content px-10 py-5">
        <aside className="flex items-center gap-3 mt-2">
            <img src={logo} alt="Logo CoPlace" style={{ width: '50px', height: 'auto' }} />
            <p>
            CoPlace Coworking
            <br />
            Conectando pessoas, negócios e inovação
            </p>
        </aside>

        <nav>
            <h6 className="footer-title">Rede Social</h6>
            <div className="grid grid-flow-col gap-4">
                <a href="https://www.instagram.com/coplacecoworking" target="_blank" rel="noopener noreferrer">
                    <FaInstagram color="white" size={30} />
                </a>
            </div>
        </nav>
    </footer>
  )
}
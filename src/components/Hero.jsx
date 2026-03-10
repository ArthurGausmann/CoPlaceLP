import sala4 from "../assets/fotoSala4CP_RG.jpeg"
import elemento7 from "../assets/elemento007.png"
import fachadaVert from "../assets/fachadaCP_RG-Vert.jpeg"

export default function Hero() {
  return (
    <section className="hero min-h-screen" style={{ backgroundImage: `url(${fachadaVert})`, backgroundPosition: "center 60%"}}>
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-neutral-content flex-col lg:flex-row-reverse container mx-auto">

        <img src={elemento7} className="max-w-md rounded-xl w-75"/>

        <div>
          <h1 className="text-5xl font-bold text-secondary">Endereço fiscal para sua empresa</h1>
          <p className="py-6 text-lg">
           Registre seu CNPJ em um endereço comercial dentro da Co.place e tenha mais 
           credibilidade para o seu negócio, sem precisar alugar um escritório físico.
          </p>

          <div className="flex gap-4">
            <a href="#planos" className="btn btn-primary">Planos</a>
            <button className="btn btn-outline btn-success">Falar no WhatsApp</button>
          </div>
        </div>

      </div>
    </section>
  )
}
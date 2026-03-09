export default function Sobre() {

  return (
    <section id="sobre" className="py-20 bg-base-100">

      <div className="container mx-auto text-center max-w-4xl">

        <h2 className="text-4xl font-bold mb-6">
          Conheça a Co.place
        </h2>

        <p className="text-lg opacity-80">
          Somos um hub colaborativo localizado no Pelotas Parque Tecnológico
          que conecta pessoas, negócios e inovação, oferecendo infraestrutura
          completa para empresas, eventos e projetos.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="card bg-base-200 shadow">
            <div className="card-body items-center">
              <h3 className="font-bold text-lg">
                Infraestrutura
              </h3>
              <p>Ambientes modernos para trabalho e eventos</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body items-center">
              <h3 className="font-bold text-lg">
                Networking
              </h3>
              <p>Conexão com startups e empresas</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body items-center">
              <h3 className="font-bold text-lg">
                Inovação
              </h3>
              <p>Ecossistema tecnológico e empreendedor</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
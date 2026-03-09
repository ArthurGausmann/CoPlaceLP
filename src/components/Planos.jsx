export default function Planos() {

  return (
    <section id="planos" className="py-20 bg-base-200">

      <div className="container mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          Planos de Endereço Fiscal
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="card bg-base-100 shadow-lg">

            <div className="card-body">

              <h3 className="text-xl font-bold">
                Básico
              </h3>

              <p className="text-4xl font-bold text-primary">
                R$99
              </p>

              <ul className="text-left space-y-2">
                <li>Endereço fiscal</li>
                <li>Recebimento de correspondência</li>
              </ul>

              <button className="btn btn-primary mt-4">
                Contratar
              </button>

            </div>

          </div>

          <div className="card bg-base-100 shadow-xl border-2 border-primary">

            <div className="card-body">

              <h3 className="text-xl font-bold">
                Profissional
              </h3>

              <p className="text-4xl font-bold text-primary">
                R$199
              </p>

              <ul className="text-left space-y-2">
                <li>Endereço fiscal</li>
                <li>Coworking mensal</li>
                <li>Networking</li>
              </ul>

              <button className="btn btn-primary mt-4">
                Contratar
              </button>

            </div>

          </div>

          <div className="card bg-base-100 shadow-lg">

            <div className="card-body">

              <h3 className="text-xl font-bold">
                Premium
              </h3>

              <p className="text-4xl font-bold text-primary">
                R$299
              </p>

              <ul className="text-left space-y-2">
                <li>Endereço fiscal</li>
                <li>Salas de reunião</li>
                <li>Eventos e networking</li>
              </ul>

              <button className="btn btn-primary mt-4">
                Falar com consultor
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
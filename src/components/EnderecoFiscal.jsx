export default function EnderecoFiscal() {
    return (
    <>
    <section className="bg-base-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            O que é endereço fiscal?
          </h2>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            O endereço fiscal é o local utilizado para registrar oficialmente o
            CNPJ de uma empresa. Ele aparece em documentos legais, cadastros
            públicos e na emissão de notas fiscais.
          </p>

          <p className="mt-4 opacity-80 max-w-3xl mx-auto">
            Com esse serviço, sua empresa pode utilizar um endereço comercial
            profissional mesmo trabalhando remotamente ou em home office.
            Na Co.place, sua empresa passa a fazer parte de um ambiente de
            inovação conectado ao ecossistema do Parque Tecnológico.
          </p>
        </div>

        {/* Como funciona */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              <div className="badge badge-primary badge-lg mb-3">1</div>
              <h3 className="card-title">Contrate o plano</h3>
              <p>
                Escolha o plano de endereço fiscal ideal para o seu negócio.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              <div className="badge badge-primary badge-lg mb-3">2</div>
              <h3 className="card-title">Registre seu CNPJ</h3>
              <p>
                Utilize o endereço da Co.place para registrar sua empresa.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              <div className="badge badge-primary badge-lg mb-3">3</div>
              <h3 className="card-title">Use oficialmente</h3>
              <p>
                Passe a utilizar o endereço em documentos, cadastros e notas fiscais.
              </p>
            </div>
          </div>

        </div>

        {/* Vantagens */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Vantagens do endereço fiscal
            </h3>

            <ul className="space-y-4">

              <li className="flex gap-3 items-start">
                <span className="badge badge-success">✔</span>
                Redução de custos com aluguel de escritório
              </li>

              <li className="flex gap-3 items-start">
                <span className="badge badge-success">✔</span>
                Endereço comercial profissional para sua empresa
              </li>

              <li className="flex gap-3 items-start">
                <span className="badge badge-success">✔</span>
                Mais credibilidade para clientes e parceiros
              </li>

              <li className="flex gap-3 items-start">
                <span className="badge badge-success">✔</span>
                Regularização do CNPJ com endereço empresarial
              </li>

              <li className="flex gap-3 items-start">
                <span className="badge badge-success">✔</span>
                Inserção em um ambiente de inovação e negócios
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-2xl">
                Tenha um endereço profissional
              </h3>

              <p className="opacity-80">
                Registre sua empresa na Co.place e tenha mais
                credibilidade para seu negócio sem precisar
                manter um escritório físico.
              </p>

              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary">
                  Ver planos
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
    )
}
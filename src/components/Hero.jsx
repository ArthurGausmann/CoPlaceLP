export default function Hero() {
    return (
        <section className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse container mx-auto">

                <img
                src="/coworking.jpg"
                className="max-w-md rounded-xl shadow-lg"
                />

                <div>
                    <h1 className="text-5xl font-bold text-secondary">Endereço fiscal para sua empresa</h1>

                    <p className="py-6 text-lg">
                        Tenha um endereço profissional no Pelotas Parque Tecnológico
                        e aumente a credibilidade do seu negócio.
                    </p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary">Ver planos</button>

                        <button className="btn btn-outline btn-primary">Falar no WhatsApp</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
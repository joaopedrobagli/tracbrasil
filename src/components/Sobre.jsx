const Sobre = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-green-500 font-semibold">SOBRE NÓS</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2">Tecnologia e Robustez para o Produtor Brasileiro</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A <span className="text-green-500">TracBrasil</span> nasceu com a missão de levar ao produtor rural máquinas agrícolas robustas, modernas e preparadas para entregar alto desempenho em qualquer operação no campo.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             Com foco em tecnologia, durabilidade e eficiência, desenvolvemos e fornecemos equipamentos capazes de enfrentar os desafios reais do dia a dia na lavoura. Cada máquina da TracBrasil é projetada para garantir produtividade, economia e confiabilidade, sempre com suporte especializado e atendimento próximo ao cliente.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-96">
          <img 
            src="/sobre.jpg"  
            className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
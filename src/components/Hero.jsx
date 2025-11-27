const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/trator.jpg')" }}></div>

      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Referência em Máquinas Agrícolas
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Potência e Tecnologia em
            <span className="text-green-500">Equipamentos Agrícolas</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Máquinas agrícolas de alta performance com engenharia avançada. 
            Aumente sua produtividade com tecnologia e assistência especializada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
             
            <a href="#produtos" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-glow shadow-md text-center">
              Ver Produtos
            </a>
             
            <a href="#contato" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-glow shadow-md text-center">
              Fale com Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
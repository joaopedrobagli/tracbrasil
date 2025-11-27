const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-500 font-semibold text-lg">CONTATO</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar sua operação agrícola? Fale com nossos especialistas.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Solicite um Orçamento</h3>
            <p className="text-gray-600 mb-6">Preencha o formulário abaixo e retornaremos em breve</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="Seu nome"
                    required/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="(99) 99999-9999"
                    required/>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="email@email.com"
                  required/>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Produto de Interesse</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition">
                  <option>Selecione o produto</option>
                  <option>Tratores</option>
                  <option>Colheitadeiras</option>
                  <option>Plantadeiras</option>
                  <option>Pulverizadores</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Informe sua mensagem!"></textarea>
              </div>

              <button 
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-glow shadow-md block mx-auto">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
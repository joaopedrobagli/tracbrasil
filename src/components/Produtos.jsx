import { useState } from 'react'

const Produtos = () => {
  const [modalAberto, setModalAberto] = useState(false)
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)

  const categorias = [
    {
      id: 1,
      nome: 'Tratores',
      imagem: '/trator-prod.jpg',
      modelos: '2 modelos',
      descricao: 'Para todas as necessidades e tamanhos.',
      modelosDetalhados: [
        { 
          nome: 'Trator TX-75', 
          preco: 'R$ 185.000', 
          especificacoes: ['Potência: 75HP', 'Tração: 4x4', 'Transmissão: 12x12'] 
        },
        { 
          nome: 'Trator 110HP Premium', 
          preco: 'R$ 245.000', 
          especificacoes: ['Potência: 110HP', 'Tração: 4x4', 'Transmissão: 32 marchas'] 
        }
      ]
    },
    {
      id: 2,
      nome: 'Colheitadeiras', 
      imagem: '/colheitadeira.jpg',
      modelos: '2 modelos',
      descricao: 'Alta capacidade para soja e milho.',
      modelosDetalhados: [
        { 
          nome: 'Colheitadeira Soja', 
          preco: 'R$ 680.000', 
          especificacoes: [ 'Combustível: Diesel', 'Tanque: 600L'] 
        },
        { 
          nome: 'Colheitadeira Milho Pro', 
          preco: 'R$ 720.000', 
          especificacoes: [ 'Combustível: Diesel', 'Tanque: 750L'] 
        }
      ]
    },
    {
      id: 3,
      nome: 'Plantadeiras',
      imagem: '/plantadeira.png', 
      modelos: '2 modelos',
      descricao: 'Precisão no plantio de diversas culturas.',
      modelosDetalhados: [
        { 
          nome: 'Plantadeira 8 Linhas', 
          preco: 'R$ 85.000', 
          especificacoes: ['8 linhas', 'Plantio direto', 'Controle eletrônico'] 
        },
        { 
          nome: 'Plantadeira 12 Linhas Pro', 
          preco: 'R$ 120.000', 
          especificacoes: ['12 linhas', 'Plantio direto', 'GPS integrado'] 
        }
      ]
    },
    {
      id: 4,
      nome: 'Pulverizadores',
      imagem: '/pulverizadores.jpg',
      modelos: '2 modelos',
      descricao: 'Autopropelidos e de arrasto para sua plantação.',
      modelosDetalhados: [
        { 
          nome: 'Pulverizador 2000L', 
          preco: 'R$ 65.000', 
          especificacoes: ['Tanque: 2000L', 'Barras: 24m', 'Pressão: 60 bar'] 
        },
        { 
          nome: 'Pulverizador 3000L Auto', 
          preco: 'R$ 150.000', 
          especificacoes: ['Tanque: 3000L', 'Barras: 30m', 'Autopropelido'] 
        }
      ]
    }
  ]

  const abrirModal = (categoria) => {
    setCategoriaSelecionada(categoria)
    setModalAberto(true)
  }

  const fecharModal = () => {
    setModalAberto(false)
    setCategoriaSelecionada(null)
  }

  const irParaContato = () => {
    fecharModal() 
    setTimeout(() => {
      const contatoSection = document.getElementById('contato')
      if (contatoSection) {
        contatoSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">NOSSOS PRODUTOS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipamentos de alta performance desenvolvidos para maximizar 
            sua produtividade e reduzir custos operacionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
              <div 
                className="h-48 bg-cover bg-center relative overflow-hidden group transition duration-500 hover:scale-105"
                style={{ backgroundImage: `url('${categoria.imagem}')` }}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h3 className="text-2xl font-bold">{categoria.nome}</h3>
                  <p className="text-gray-200">{categoria.modelos}</p>
                </div>
              </div>
            
              <div className="p-6">
                <p className="text-gray-600 mb-4">{categoria.descricao}</p>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => abrirModal(categoria)}
                    className="text-green-600 font-semibold hover:text-green-700 transition flex items-center gap-1 group">
                    Ver modelos
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {modalAberto && categoriaSelecionada && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            
              <div className="bg-green-500 text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{categoriaSelecionada.nome}</h3>
                    <p className="text-green-100">{categoriaSelecionada.modelos} disponíveis</p>
                  </div>
                  <button 
                    onClick={fecharModal}
                    className="text-white hover:text-gray-200 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition">
                    ×
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {categoriaSelecionada.modelosDetalhados.map((modelo, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300 bg-white">
                      <h4 className="font-bold text-xl text-gray-800 mb-3">{modelo.nome}</h4>
                      <p className="text-green-600 font-bold text-2xl mb-4">{modelo.preco}</p>
                      <ul className="space-y-2 mb-6">
                        {modelo.especificacoes.map((espec, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {espec}
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        onClick={irParaContato}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md">
                        Entrar em contato
                      </button>
                    </div>
                  ))}
                </div>
              </div>  
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Produtos
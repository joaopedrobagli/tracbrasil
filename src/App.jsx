import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Produtos from './components/Produtos'
import Contato from './components/Contato'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Sobre />
      <Produtos />
      <Contato />
    </div>
  )
}

export default App
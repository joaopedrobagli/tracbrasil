const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              className="h-12 w-auto"/>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 font-medium transition">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-green-600 font-medium transition">Sobre</a>
            <a href="#produtos" className="text-gray-700 hover:text-green-600 font-medium transition">Produtos</a>
            <a href="#contato" className="text-gray-700 hover:text-green-600 font-medium transition">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
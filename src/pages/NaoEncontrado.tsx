

import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

function NaoEncontrado() {
  const navegar = useNavigate()

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Página não encontrada" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">
        <div className="bg-white rounded-xl shadow p-8 text-center max-w-sm mx-auto mt-8">
          <p className="text-6xl mb-4">🦷</p>
          <h2 className="text-blue-800 font-bold text-2xl mb-2">Ops! Página não encontrada</h2>
          <p className="text-gray-500 mb-6">Essa página não existe no nosso site.</p>
          <button
            onClick={() => navegar('/')}
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl"
          >
            Voltar ao início
          </button>
        </div>
      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default NaoEncontrado

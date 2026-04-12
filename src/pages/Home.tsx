

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

function Home() {

  const [nomeUsuario, setNomeUsuario] = useState('')

  const navegar = useNavigate()

  // quando a página carrega, verifico se tem alguem logado
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('loggedUser')
    if (usuarioSalvo) {
      // pego só a parte antes do @ do email
      const nome = usuarioSalvo.split('@')[0]
      setNomeUsuario(nome)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo={nomeUsuario ? `Olá, ${nomeUsuario}! — Turma do Bem` : 'ONG Turma do Bem'} />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        {/* card campanha 1 */}
        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h3 className="text-blue-800 font-bold text-lg mb-2">Campanha do Sorriso</h3>
          <p className="text-gray-600">Leve alegria e autoestima a quem precisa.</p>
        </div>

        {/* card campanha 2 */}
        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h3 className="text-blue-800 font-bold text-lg mb-2">Projeto Mulheres Fortes</h3>
          <p className="text-gray-600">Atendimento gratuito e acolhimento seguro.</p>
        </div>

        {/* card principal com o cartão QR */}
        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h2 className="text-blue-800 font-bold text-xl mb-3">
            Sorriso com tecnologia e solidariedade
          </h2>
          <p className="text-gray-600 mb-4">
            Conectamos pacientes a dentistas voluntários com um cartão físico que contém
            um QR Code único — acesso rápido à ficha digital do paciente e melhor
            organização dos atendimentos.
          </p>
          <img
            src="/imagens/Dentinho Cadastrado.png"
            alt="Cartão com QR Code"
            className="block mx-auto my-4 w-64 rounded-xl shadow"
          />
          {/* botão que leva pra página de login */}
          <div className="text-center mt-3">
            <button
              onClick={() => navegar('/login')}
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl"
            >
              Entrar / Criar Conta
            </button>
          </div>
        </div>

        {/* card com os motivos de usar */}
        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h3 className="text-blue-800 font-bold text-lg mb-2">Por que usar?</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Registro único e acessível do paciente</li>
            <li>Histórico de atendimentos centralizado</li>
            <li>Baixo custo de implementação</li>
          </ul>
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Home

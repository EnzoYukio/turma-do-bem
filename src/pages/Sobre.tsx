// página sobre o projeto

import { useEffect } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

function Sobre() {

  // muda o titulo da aba quando entra na página
  useEffect(() => {
    document.title = 'Sobre — Turma do Bem'

    // quando sair da página volta o titulo original
    return () => {
      document.title = 'ONG Turma do Bem'
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Sobre o Projeto" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h2 className="text-blue-800 font-bold text-xl mb-3">Nosso propósito</h2>
          <p className="text-gray-600 mb-4">
            O projeto "Cartão com QR Code" da ONG Turma do Bem foi pensado para reduzir
            perda de informações e agilizar o atendimento odontológico de pacientes em
            situação de vulnerabilidade.
          </p>

          <h3 className="text-blue-800 font-semibold text-lg mb-2">Tecnologias utilizadas</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1 mb-4">
            <li>React + Vite + TypeScript (front-end)</li>
            <li>TailwindCSS para estilização</li>
            <li>React Router para navegação entre páginas</li>
          </ul>

          <h3 className="text-blue-800 font-semibold text-lg mb-2">Roadmap</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Implementação piloto</li>
            <li>Melhorias e ajustes</li>
            <li>Integração com novos parceiros</li>
          </ul>
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Sobre

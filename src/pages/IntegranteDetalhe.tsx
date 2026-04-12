import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

const integrantes = [
  {
    id: 'enzo',
    nome: 'Enzo Yukio Oyadomari',
    rm: '561032',
    turma: 'TDSPR',
    foto: '/imagens/fotoenzo.jpg',
    linkedin: 'https://www.linkedin.com/in/enzooyadomari/',
    github: 'https://github.com/enzoyukio2005-netizen',
  },
  {
    id: 'joao',
    nome: 'João Victor de Souza Braz',
    rm: '566862',
    turma: 'TDSPR',
    foto: '/imagens/fotojoao.jpg',
    linkedin: 'https://www.linkedin.com/in/souzabrazj/',
    github: 'https://github.com/souzabrazj',
  },
]

function IntegranteDetalhe() {
  const { id } = useParams()
  const navegar = useNavigate()

  const pessoa = integrantes.find((i) => i.id === id)

  if (!pessoa) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col">
        <Header titulo="Perfil do Integrante" />
        <Menu />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
          <p className="text-gray-500">Integrante não encontrado.</p>
          <button onClick={() => navegar('/integrantes')} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl">
            Voltar
          </button>
        </main>
        <Footer />
        <MenuInferior />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Perfil do Integrante" />
      <Menu />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">
        <div className="bg-white rounded-xl shadow p-6 mb-4 text-center max-w-md mx-auto">
          <img
            src={pessoa.foto}
            alt={pessoa.nome}
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-600 mx-auto mb-4"
          />
          <h2 className="text-blue-800 font-bold text-xl mb-2">{pessoa.nome}</h2>
          <p className="text-gray-500 text-sm mb-1">RM: {pessoa.rm}</p>
          <p className="text-gray-500 text-sm mb-5">Turma: {pessoa.turma}</p>
          <div className="flex justify-center gap-3 mb-5">
            <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg">
              LinkedIn
            </a>
            <a href={pessoa.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg">
              GitHub
            </a>
          </div>
          <button onClick={() => navegar('/integrantes')} className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-2 rounded-xl text-sm">
            ← Voltar para a equipe
          </button>
        </div>
      </main>
      <Footer />
      <MenuInferior />
    </div>
  )
}

export default IntegranteDetalhe
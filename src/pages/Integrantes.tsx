
import { Link } from 'react-router-dom'
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
  },
  {
    id: 'joao',
    nome: 'João Victor de Souza Braz',
    rm: '566862',
    turma: 'TDSPR',
    foto: '/imagens/fotojoao.jpg',
  },
]

function Integrantes() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Quem Somos" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h2 className="text-blue-800 font-bold text-xl mb-5">Nossa equipe</h2>

          {/* grid de integrantes - 1 coluna no mobile, 2 no desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {integrantes.map((pessoa) => (
              <div key={pessoa.id} className="bg-slate-50 border border-gray-200 rounded-xl p-5 text-center">
                <img
                  src={pessoa.foto}
                  alt={`Foto de ${pessoa.nome}`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 mx-auto mb-3"
                />
                <h3 className="text-blue-800 font-semibold text-base mb-1">{pessoa.nome}</h3>
                <p className="text-gray-500 text-sm">RM: {pessoa.rm}</p>
                <p className="text-gray-500 text-sm mb-4">Turma: {pessoa.turma}</p>

                {/* link pra rota dinâmica do perfil */}
                <Link
                  to={`/integrantes/${pessoa.id}`}
                  className="bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                >
                  Ver perfil
                </Link>
              </div>
            ))}

          </div>
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Integrantes

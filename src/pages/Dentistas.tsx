// página de dentistas voluntários
// ainda não tem endpoint na API — será integrado quando estiver disponível

import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

// lista fixa de dentistas para exibição enquanto a API não tem endpoint de dentistas
const dentistasMock = [
  { id: 1, nome: 'Dr. Carlos Silva', cro: 'CRO-SP 12345', especialidade: 'Clínico Geral' },
  { id: 2, nome: 'Dra. Ana Souza', cro: 'CRO-SP 67890', especialidade: 'Ortodontia' },
  { id: 3, nome: 'Dr. Paulo Lima', cro: 'CRO-SP 11223', especialidade: 'Periodontia' },
]

function Dentistas() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Dentistas Voluntários" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h2 className="text-blue-800 font-bold text-lg mb-2">Sobre os Dentistas Voluntários</h2>
          <p className="text-gray-500 text-sm">
            Os dentistas voluntários da ONG Turma do Bem atendem pacientes de baixa renda gratuitamente.
            Cada dentista é responsável por acompanhar seus pacientes pelo cartão QR Code.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-blue-800 font-bold text-lg mb-4">Lista de Dentistas</h2>

          {dentistasMock.map((d) => (
            <div key={d.id} className="border border-gray-100 rounded-xl p-4 mb-3">
              <p className="text-blue-800 font-semibold">{d.nome}</p>
              <p className="text-gray-500 text-sm">CRO: {d.cro}</p>
              <p className="text-gray-500 text-sm">Especialidade: {d.especialidade}</p>
            </div>
          ))}
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Dentistas

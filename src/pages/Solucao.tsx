// página que explica a solução do projeto

import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

function Solucao() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Nossa Solução" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h2 className="text-blue-800 font-bold text-xl mb-3">O Cartão com QR Code</h2>
          <p className="text-gray-600 mb-3">
            Nossa solução é um cartão físico com um QR Code único para cada paciente.
            Quando o dentista voluntário escaneia o QR Code, ele acessa a ficha digital
            completa do paciente na hora, sem precisar de papelada.
          </p>
          <img
            src="/imagens/Dentinho Cadastrado.png"
            alt="Cartão com QR Code"
            className="block mx-auto my-4 w-64 rounded-xl shadow"
          />
        </div>

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h3 className="text-blue-800 font-bold text-lg mb-3">Como funciona?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0">1</span>
              <p className="text-gray-600">O paciente se cadastra na ONG e recebe seu cartão com QR Code único</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0">2</span>
              <p className="text-gray-600">O dentista voluntário escaneia o QR Code com o celular</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0">3</span>
              <p className="text-gray-600">A ficha digital do paciente abre automaticamente com todo o histórico</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0">4</span>
              <p className="text-gray-600">Após o atendimento, o dentista registra o procedimento realizado</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h3 className="text-blue-800 font-bold text-lg mb-3">Benefícios da solução</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li>Sem papelada — tudo digital</li>
            <li>Histórico completo do paciente sempre acessível</li>
            <li>Reduz erros por falta de informação</li>
            <li>Fácil de usar para os dentistas voluntários</li>
            <li>Baixo custo de implementação</li>
            <li>Se o cartão for perdido, um novo pode ser emitido sem perder os dados</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h3 className="text-blue-800 font-bold text-lg mb-3">Próximos passos</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li> Criação do site e sistema de cadastro</li>
            <li> Geração do cartão com QR Code</li>
            <li> Implementação piloto com voluntários</li>
            <li> Integração com novos parceiros</li>
            <li> Expansão para outras cidades</li>
          </ul>
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Solucao
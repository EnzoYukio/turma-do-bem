// página de perguntas frequentes
// usei useState pra abrir e fechar as perguntas (tipo um accordion)

import { useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

// lista de perguntas e respostas
const perguntas = [
  {
    id: 1,
    pergunta: 'O que é o cartão com QR Code?',
    resposta: 'É um cartão físico contendo um QR Code único que direciona para a ficha digital do paciente.',
  },
  {
    id: 2,
    pergunta: 'É necessário internet para acessar a ficha?',
    resposta: 'Sim — a ficha digital é acessada via web, portanto é necessário conexão para visualizá-la.',
  },
  {
    id: 3,
    pergunta: 'O que acontece se o cartão for perdido?',
    resposta: 'Um novo cartão pode ser emitido; o cadastro do paciente permanece no sistema.',
  },
  {
    id: 4,
    pergunta: 'Quem pode ser voluntário?',
    resposta: 'Qualquer dentista formado e registrado no CRO pode se cadastrar como voluntário.',
  },
  {
    id: 5,
    pergunta: 'O serviço tem custo para o paciente?',
    resposta: 'Não. Todo o atendimento é totalmente gratuito para os pacientes da ONG.',
  },
]

function FAQ() {
  // guardo qual pergunta está aberta, começo com null (nenhuma aberta)
  const [aberta, setAberta] = useState<number | null>(null)

  // função pra abrir/fechar pergunta
  function abrirFechar(id: number) {
    if (aberta === id) {
      // se clicar na que já está aberta, fecha
      setAberta(null)
    } else {
      // senão abre a clicada
      setAberta(id)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Perguntas Frequentes" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h2 className="text-blue-800 font-bold text-xl mb-4">Dúvidas frequentes</h2>

          {/* mapeia a lista de perguntas e renderiza cada uma */}
          {perguntas.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-xl mb-3 overflow-hidden">

              {/* botão da pergunta */}
              <button
                onClick={() => abrirFechar(item.id)}
                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 font-semibold text-blue-800 flex justify-between items-center"
              >
                <span>{item.pergunta}</span>
                <span>{aberta === item.id ? '−' : '+'}</span>
              </button>

              {/* resposta, só aparece se a pergunta estiver aberta */}
              {aberta === item.id && (
                <div className="px-4 py-3 text-gray-600 bg-white">
                  {item.resposta}
                </div>
              )}

            </div>
          ))}
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default FAQ

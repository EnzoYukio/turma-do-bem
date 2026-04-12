// página de contato com formulário
// usei React Hook Form pra validar os campos

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'

// tipo dos dados do formulário
type DadosContato = {
  nome: string
  email: string
  mensagem: string
}

function Contato() {
  // estado pra mostrar mensagem de sucesso depois de enviar
  const [enviado, setEnviado] = useState(false)

  // configuração do React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DadosContato>()

  // função que roda quando o formulário é enviado
  function enviarFormulario(dados: DadosContato) {
    console.log('dados do formulário:', dados)
    setEnviado(true)
    reset()

    // some a mensagem de sucesso depois de 3 segundos
    setTimeout(() => {
      setEnviado(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Contato" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        {/* formulário de contato */}
        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h2 className="text-blue-800 font-bold text-xl mb-4">Fale Conosco</h2>

          <form onSubmit={handleSubmit(enviarFormulario)}>

            {/* campo nome */}
            <label className="block text-sm text-gray-500 mb-1">Nome</label>
            <input
              type="text"
              {...register('nome', { required: 'Por favor informe seu nome' })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.nome && (
              <p className="text-red-500 text-xs mb-3">{errors.nome.message}</p>
            )}

            {/* campo email */}
            <label className="block text-sm text-gray-500 mb-1 mt-2">E-mail</label>
            <input
              type="email"
              {...register('email', {
                required: 'Por favor informe seu e-mail',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido',
                },
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mb-3">{errors.email.message}</p>
            )}

            {/* campo mensagem */}
            <label className="block text-sm text-gray-500 mb-1 mt-2">Mensagem</label>
            <textarea
              rows={5}
              {...register('mensagem', {
                required: 'Por favor escreva sua mensagem',
                minLength: { value: 10, message: 'Escreva pelo menos 10 caracteres' },
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-1 resize-y focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.mensagem && (
              <p className="text-red-500 text-xs mb-3">{errors.mensagem.message}</p>
            )}

            {/* mensagem de sucesso */}
            {enviado && (
              <p className="text-green-600 text-sm mb-3">✅ Mensagem enviada com sucesso!</p>
            )}

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl mt-1"
            >
              Enviar mensagem
            </button>

          </form>
        </div>

        {/* informações da ONG */}
        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <h3 className="text-blue-800 font-semibold text-lg mb-3">Informações da ONG</h3>
          <p className="font-bold text-gray-800 mb-1">ONG Turma do Bem</p>
          <p className="text-gray-600 text-sm">Email: contato@turmadobem.org.br</p>
          <p className="text-gray-600 text-sm">Endereço: Rua da turma do bem, 123 — São Paulo, SP</p>
          <p className="text-gray-600 text-sm">Telefone: (11) 1111-1111</p>
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Contato

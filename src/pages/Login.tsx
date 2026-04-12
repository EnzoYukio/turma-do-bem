
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'


type DadosLogin = {
  email: string
  senha: string
}

function Login() {
  
  const [mensagem, setMensagem] = useState('')
  const [tipoMensagem, setTipoMensagem] = useState<'erro' | 'sucesso'>('erro')

  const navegar = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DadosLogin>()

  function fazerLogin(dados: DadosLogin) {
    // pego os usuários salvos no localStorage
    const usuariosSalvos = localStorage.getItem('users')
    const usuarios: Record<string, string> = usuariosSalvos ? JSON.parse(usuariosSalvos) : {}

    if (!usuarios[dados.email]) {
      
      usuarios[dados.email] = dados.senha
      localStorage.setItem('users', JSON.stringify(usuarios))
      setTipoMensagem('sucesso')
      setMensagem('✅ Conta criada com sucesso! Faça login novamente.')
      reset()
    } else if (usuarios[dados.email] === dados.senha) {
     
      localStorage.setItem('loggedUser', dados.email)
      navegar('/')
    } else {
   
      setTipoMensagem('erro')
      setMensagem('❌ Senha incorreta. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Acesso do Voluntário" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        <div className="bg-white rounded-xl shadow p-5 mb-4 max-w-md mx-auto">
          <h2 className="text-blue-800 font-bold text-xl mb-4">Entrar ou Criar Conta</h2>

          <form onSubmit={handleSubmit(fazerLogin)}>

            {/* campo email */}
            <label className="block text-sm text-gray-500 mb-1">E-mail</label>
            <input
              type="email"
              {...register('email', {
                required: 'Informe seu e-mail',
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

            {/* campo senha */}
            <label className="block text-sm text-gray-500 mb-1 mt-2">Senha</label>
            <input
              type="password"
              {...register('senha', {
                required: 'Informe sua senha',
                minLength: { value: 6, message: 'A senha precisa ter pelo menos 6 caracteres' },
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.senha && (
              <p className="text-red-500 text-xs mb-3">{errors.senha.message}</p>
            )}

            {/* mensagem de erro ou sucesso */}
            {mensagem && (
              <p className={`text-sm mb-3 ${tipoMensagem === 'sucesso' ? 'text-green-600' : 'text-red-500'}`}>
                {mensagem}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl mt-1"
            >
              Acessar
            </button>

          </form>
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Login

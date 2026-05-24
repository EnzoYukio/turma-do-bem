import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'
import type { Paciente } from '../types'

// TROQUE pela URL real da API no Railway
const API_URL = 'https://turma-do-bem-api-v2-production.up.railway.app/paciente'

// tipo do formulário sem id e sem idendereco
type FormPaciente = {
  nome: string
  cpf: string
  email: string
  telefone: string
  codigoQR: string
  endereco: string
  dentista: string
}

function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [mostrarForm, setMostrarForm] = useState(false)
  const [editando, setEditando] = useState<Paciente | null>(null)

  const [form, setForm] = useState<FormPaciente>({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    codigoQR: '',
    endereco: '',
    dentista: '',
  })

  useEffect(() => {
    buscarPacientes()
  }, [])

  // GET — busca todos os pacientes
  async function buscarPacientes() {
    setCarregando(true)
    try {
      const resposta = await fetch(API_URL)
      if (!resposta.ok) throw new Error('Erro ao buscar')
      const dados: Paciente[] = await resposta.json()
      setPacientes(dados)
    } catch {
      setMensagem('❌ Não foi possível carregar os pacientes. Verifique a API.')
    } finally {
      setCarregando(false)
    }
  }

  // POST — adiciona novo paciente
  async function adicionarPaciente() {
    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, idendereco: 1 }),
      })
      if (!resposta.ok) throw new Error('Erro ao adicionar')
      setMensagem('✅ Paciente adicionado!')
      resetarForm()
      buscarPacientes()
    } catch {
      setMensagem('❌ Erro ao adicionar paciente.')
    }
  }

  // PUT — atualiza paciente
  async function atualizarPaciente() {
    if (!editando) return
    try {
      const resposta = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, id: editando.id, idendereco: 1 }),
      })
      if (!resposta.ok) throw new Error('Erro ao atualizar')
      setMensagem('✅ Paciente atualizado!')
      resetarForm()
      buscarPacientes()
    } catch {
      setMensagem('❌ Erro ao atualizar paciente.')
    }
  }

  // DELETE — remove paciente
  async function removerPaciente(id: Paciente['id']) {
    if (!confirm('Tem certeza que quer remover este paciente?')) return
    try {
      const resposta = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!resposta.ok) throw new Error('Erro ao remover')
      setMensagem('✅ Paciente removido!')
      buscarPacientes()
    } catch {
      setMensagem('❌ Erro ao remover paciente.')
    }
  }

  function prepararEdicao(paciente: Paciente) {
    setEditando(paciente)
    setForm({
      nome: paciente.nome,
      cpf: paciente.cpf,
      email: paciente.email,
      telefone: paciente.telefone,
      codigoQR: paciente.codigoQR,
      endereco: paciente.endereco,
      dentista: paciente.dentista,
    })
    setMostrarForm(true)
  }

  function resetarForm() {
    setForm({ nome: '', cpf: '', email: '', telefone: '', codigoQR: '', endereco: '', dentista: '' })
    setEditando(null)
    setMostrarForm(false)
  }

  function enviarForm() {
    // valida campos obrigatórios
    if (!form.nome || !form.cpf || !form.email || !form.telefone) {
      setMensagem('❌ Preencha todos os campos obrigatórios.')
      return
    }
    // valida CPF — precisa ter exatamente 11 dígitos
    const cpfSoNumeros = form.cpf.replace(/\D/g, '')
    if (cpfSoNumeros.length !== 11) {
      setMensagem('❌ CPF precisa ter exatamente 11 dígitos.')
      return
    }
    if (editando) {
      atualizarPaciente()
    } else {
      adicionarPaciente()
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Pacientes" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        {mensagem && (
          <div className="bg-white rounded-xl shadow p-3 mb-4 text-center text-sm text-gray-700">
            {mensagem}
            <button onClick={() => setMensagem('')} className="ml-3 text-gray-400 hover:text-gray-600">✕</button>
          </div>
        )}

        {!mostrarForm && (
          <div className="mb-4 text-right">
            <button
              onClick={() => setMostrarForm(true)}
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl"
            >
              + Novo Paciente
            </button>
          </div>
        )}

        {mostrarForm && (
          <div className="bg-white rounded-xl shadow p-5 mb-4">
            <h2 className="text-blue-800 font-bold text-lg mb-4">
              {editando ? 'Editar Paciente' : 'Novo Paciente'}
            </h2>

            <label className="block text-sm text-gray-500 mb-1">Nome *</label>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">CPF * (só números, 11 dígitos)</label>
            <input
              type="text"
              value={form.cpf}
              maxLength={11}
              onChange={(e) => setForm({ ...form, cpf: e.target.value.replace(/\D/g, '') })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">Telefone *</label>
            <input
              type="text"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">Dentista responsável</label>
            <input
              type="text"
              value={form.dentista}
              onChange={(e) => setForm({ ...form, dentista: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">Endereço</label>
            <input
              type="text"
              value={form.endereco}
              onChange={(e) => setForm({ ...form, endereco: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="flex gap-3">
              <button
                onClick={enviarForm}
                className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl"
              >
                {editando ? 'Salvar' : 'Adicionar'}
              </button>
              <button
                onClick={resetarForm}
                className="border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold px-5 py-2 rounded-xl"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-blue-800 font-bold text-lg mb-4">Lista de Pacientes</h2>

          {carregando && <p className="text-gray-500 text-sm">Carregando...</p>}

          {!carregando && pacientes.length === 0 && (
            <p className="text-gray-400 text-sm">Ainda não há pacientes cadastrados.</p>
          )}

          {pacientes.map((p) => (
            <div key={String(p.id)} className="border border-gray-100 rounded-xl p-4 mb-3">
              <p className="text-blue-800 font-semibold">{p.nome}</p>
              <p className="text-gray-500 text-sm">CPF: {p.cpf}</p>
              <p className="text-gray-500 text-sm">Email: {p.email}</p>
              <p className="text-gray-500 text-sm">Telefone: {p.telefone}</p>
              <p className="text-gray-500 text-sm">Dentista: {p.dentista}</p>
              <p className="text-gray-500 text-sm mb-3">Endereço: {p.endereco}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => prepararEdicao(p)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                >
                  Editar
                </button>
                <button
                  onClick={() => removerPaciente(p.id)}
                  className="bg-red-500 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
      <MenuInferior />
    </div>
  )
}

export default Pacientes

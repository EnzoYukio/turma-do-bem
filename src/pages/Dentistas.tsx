// página de gerenciamento de dentistas voluntários
// aqui dá pra ver, adicionar, editar e remover dentistas da API

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuInferior from '../components/MenuInferior'
import Footer from '../components/Footer'
import type { Dentista, FormDentista } from '../types'

// TROQUE essa URL pela URL da API Java quando estiver publicada
const API_URL = 'https://turma-do-bem-api-v2-production.up.railway.app/Dentistas'

function Dentistas() {
  // lista de dentistas que vem da API
  const [dentistas, setDentistas] = useState<Dentista[]>([])

  // controla se está carregando
  const [carregando, setCarregando] = useState(false)

  // mensagem de feedback
  const [mensagem, setMensagem] = useState('')

  // controla se o formulário está visível
  const [mostrarForm, setMostrarForm] = useState(false)

  // dentista que está sendo editado
  const [editando, setEditando] = useState<Dentista | null>(null)

  // dados do formulário
  const [form, setForm] = useState<FormDentista>({
    nome: '',
    cro: '',
    especialidade: '',
    status: 'ativo',
  })

  // carrega os dentistas quando a página abre
  useEffect(() => {
    buscarDentistas()
  }, [])

  // GET — busca todos os dentistas
  async function buscarDentistas() {
    setCarregando(true)
    try {
      const resposta = await fetch(API_URL)
      if (!resposta.ok) throw new Error('Erro ao buscar dentistas')
      const dados: Dentista[] = await resposta.json()
      setDentistas(dados)
    } catch {
      setMensagem('❌ Não foi possível carregar os dentistas. Verifique a API.')
    } finally {
      setCarregando(false)
    }
  }

  // POST — adiciona novo dentista
  async function adicionarDentista() {
    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!resposta.ok) throw new Error('Erro ao adicionar')
      setMensagem('✅ Dentista adicionado!')
      resetarForm()
      buscarDentistas()
    } catch {
      setMensagem('❌ Erro ao adicionar dentista.')
    }
  }

  // PUT — atualiza dentista existente
  async function atualizarDentista() {
    if (!editando) return
    try {
      const resposta = await fetch(`${API_URL}/${editando.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!resposta.ok) throw new Error('Erro ao atualizar')
      setMensagem('✅ Dentista atualizado!')
      resetarForm()
      buscarDentistas()
    } catch {
      setMensagem('❌ Erro ao atualizar dentista.')
    }
  }

  // DELETE — remove dentista
  async function removerDentista(id: Dentista['id']) {
    if (!confirm('Tem certeza que quer remover este dentista?')) return
    try {
      const resposta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
      if (!resposta.ok) throw new Error('Erro ao remover')
      setMensagem('✅ Dentista removido!')
      buscarDentistas()
    } catch {
      setMensagem('❌ Erro ao remover dentista.')
    }
  }

  // prepara o form para edição
  function prepararEdicao(dentista: Dentista) {
    setEditando(dentista)
    setForm({
      nome: dentista.nome,
      cro: dentista.cro,
      especialidade: dentista.especialidade,
      status: dentista.status,
    })
    setMostrarForm(true)
  }

  // limpa o form
  function resetarForm() {
    setForm({ nome: '', cro: '', especialidade: '', status: 'ativo' })
    setEditando(null)
    setMostrarForm(false)
  }

  // envia o form (POST ou PUT)
  function enviarForm() {
    if (!form.nome || !form.cro || !form.especialidade) {
      setMensagem('❌ Preencha todos os campos.')
      return
    }
    if (editando) {
      atualizarDentista()
    } else {
      adicionarDentista()
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header titulo="Dentistas Voluntários" />
      <Menu />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24 md:pb-6">

        {/* mensagem de feedback */}
        {mensagem && (
          <div className="bg-white rounded-xl shadow p-3 mb-4 text-center text-sm text-gray-700">
            {mensagem}
            <button onClick={() => setMensagem('')} className="ml-3 text-gray-400 hover:text-gray-600">✕</button>
          </div>
        )}

        {/* botão novo dentista */}
        {!mostrarForm && (
          <div className="mb-4 text-right">
            <button
              onClick={() => setMostrarForm(true)}
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl"
            >
              + Novo Dentista
            </button>
          </div>
        )}

        {/* formulário */}
        {mostrarForm && (
          <div className="bg-white rounded-xl shadow p-5 mb-4">
            <h2 className="text-blue-800 font-bold text-lg mb-4">
              {editando ? 'Editar Dentista' : 'Novo Dentista'}
            </h2>

            <label className="block text-sm text-gray-500 mb-1">Nome</label>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">CRO</label>
            <input
              type="text"
              value={form.cro}
              onChange={(e) => setForm({ ...form, cro: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">Especialidade</label>
            <input
              type="text"
              value={form.especialidade}
              onChange={(e) => setForm({ ...form, especialidade: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="block text-sm text-gray-500 mb-1">Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value as 'ativo' | 'inativo' })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>

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

        {/* lista de dentistas */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-blue-800 font-bold text-lg mb-4">Lista de Dentistas</h2>

          {carregando && <p className="text-gray-500 text-sm">Carregando...</p>}

          {!carregando && dentistas.length === 0 && (
            <p className="text-gray-400 text-sm">Nenhum dentista cadastrado ainda.</p>
          )}

          {dentistas.map((d) => (
            <div key={String(d.id)} className="border border-gray-100 rounded-xl p-4 mb-3">
              <p className="text-blue-800 font-semibold">{d.nome}</p>
              <p className="text-gray-500 text-sm">CRO: {d.cro}</p>
              <p className="text-gray-500 text-sm">Especialidade: {d.especialidade}</p>
              <p className="text-gray-500 text-sm mb-3">
                Status:{' '}
                <span className={d.status === 'ativo' ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
                  {d.status}
                </span>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => prepararEdicao(d)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                >
                  Editar
                </button>
                <button
                  onClick={() => removerDentista(d.id)}
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

export default Dentistas

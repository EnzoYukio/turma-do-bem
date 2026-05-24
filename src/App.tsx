// arquivo principal que define todas as rotas do site
// usei o BrowserRouter do react-router-dom pra fazer o SPA funcionar

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import Integrantes from './pages/Integrantes'
import IntegranteDetalhe from './pages/IntegranteDetalhe'
import Login from './pages/Login'
import NaoEncontrado from './pages/NaoEncontrado'
import Pacientes from './pages/Pacientes'
import Dentistas from './pages/Dentistas'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* rotas estáticas */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/dentistas" element={<Dentistas />} />

        {/* rota dinâmica — o :id muda dependendo de qual integrante foi clicado */}
        <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />

        {/* rota 404 — aparece quando nenhuma outra rota bate */}
        <Route path="*" element={<NaoEncontrado />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

// menu que aparece só no celular, fixo na parte de baixo da tela

import { NavLink } from 'react-router-dom'

function MenuInferior() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-50 md:hidden">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'text-blue-800 text-xs font-bold' : 'text-blue-500 text-xs font-semibold'}>
        Início
      </NavLink>
      <NavLink to="/pacientes" className={({ isActive }) => isActive ? 'text-blue-800 text-xs font-bold' : 'text-blue-500 text-xs font-semibold'}>
        Pacientes
      </NavLink>
      <NavLink to="/dentistas" className={({ isActive }) => isActive ? 'text-blue-800 text-xs font-bold' : 'text-blue-500 text-xs font-semibold'}>
        Dentistas
      </NavLink>
      <NavLink to="/sobre" className={({ isActive }) => isActive ? 'text-blue-800 text-xs font-bold' : 'text-blue-500 text-xs font-semibold'}>
        Sobre
      </NavLink>
      <NavLink to="/integrantes" className={({ isActive }) => isActive ? 'text-blue-800 text-xs font-bold' : 'text-blue-500 text-xs font-semibold'}>
        Equipe
      </NavLink>
    </nav>
  )
}

export default MenuInferior

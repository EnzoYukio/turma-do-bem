// menu de navegação que fica no topo da página
// usei NavLink pra destacar a página atual automaticamente

import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className="bg-blue-600 flex justify-center flex-wrap gap-1 py-2 px-2">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? 'text-white font-bold px-3 py-2 rounded-lg bg-blue-800 text-sm'
            : 'text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 text-sm'
        }
      >
        Início
      </NavLink>

      <NavLink
        to="/sobre"
        className={({ isActive }) =>
          isActive
            ? 'text-white font-bold px-3 py-2 rounded-lg bg-blue-800 text-sm'
            : 'text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 text-sm'
        }
      >
        Sobre
      </NavLink>

      <NavLink
        to="/faq"
        className={({ isActive }) =>
          isActive
            ? 'text-white font-bold px-3 py-2 rounded-lg bg-blue-800 text-sm'
            : 'text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 text-sm'
        }
      >
        FAQ
      </NavLink>

      <NavLink
        to="/contato"
        className={({ isActive }) =>
          isActive
            ? 'text-white font-bold px-3 py-2 rounded-lg bg-blue-800 text-sm'
            : 'text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 text-sm'
        }
      >
        Contato
      </NavLink>

      <NavLink
        to="/integrantes"
        className={({ isActive }) =>
          isActive
            ? 'text-white font-bold px-3 py-2 rounded-lg bg-blue-800 text-sm'
            : 'text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 text-sm'
        }
      >
        Integrantes
      </NavLink>
      <NavLink
  to="/solucao"
  className={({ isActive }) =>
    isActive
      ? 'text-white font-bold px-3 py-2 rounded-lg bg-blue-800 text-sm'
      : 'text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 text-sm'
  }
>
  Solução
</NavLink>
    </nav>
  )
}

export default Menu

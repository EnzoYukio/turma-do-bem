// componente do cabeçalho que aparece em todas as páginas

type Props = {
  titulo: string
}

function Header({ titulo }: Props) {
  return (
    <header className="bg-blue-800 text-white py-4 px-5 text-center relative shadow">
      <img
        src="/imagens/logo-turma-do-bem.png"
        alt="logo"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 rounded-lg"
      />
      <h1 className="text-xl font-bold md:text-2xl">{titulo}</h1>
    </header>
  )
}

export default Header

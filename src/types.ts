type Status = 'ativo' | 'inativo' 


type Id = number | string 


export interface Paciente {
  id: Id
  nome: string
  cpf: string
  email: string
  telefone: string
  CodigoQR: string
  idendereco: number
  endereco: string
  dentista: string
}

export interface Dentista {
  Iddentista: Id
  nome: string
  cpf: string
  especialidade: string
  cro: string
}

export type PacienteComStatus = Paciente & { status: Status }

export type FormPaciente = Omit<Paciente, 'id' | 'CodigoQR'>

export type FormDentista = Omit<Dentista, 'Iddentista'>

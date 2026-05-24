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
  id: Id
  nome: string
  cro: string
  especialidade: string
  status: Status
}
 
export type PacienteComStatus = Paciente & { status: Status }
export type FormPaciente = Omit<Paciente, 'id'>
export type FormDentista = Omit<Dentista, 'id'>
 
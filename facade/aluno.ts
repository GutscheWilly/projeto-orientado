export class Aluno {
  constructor(
    public id: number,
    private nome: string,
    private matricula: string 
  ) {}

  getNome() {
    return this.nome
  }

  getMatricula() {
    return this.matricula
  }
}

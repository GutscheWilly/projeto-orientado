export class Curso {
  constructor(
    public id: number,
    private nome: string
  ) {}

  getNome() {
    return this.nome
  }
}

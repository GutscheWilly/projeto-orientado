import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Escola } from "./escola";

export class Turma {
  private alunos: Aluno[] = []
  
  constructor(
    public id: number,
    private curso: Curso,
    private escola: Escola
  ) {}

  getNomeCurso() {
    return this.curso.getNome()
  }

  setCurso(curso: Curso) {
    this.curso = curso
  }

  addAluno(aluno: Aluno) {
    this.alunos.push(aluno)
    this.escola.addAluno(aluno)
  }

  mostrarAlunos() {
    this.alunos.forEach(aluno => console.log(aluno.getNome()))
  }
}

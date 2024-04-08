import { Aluno } from "./aluno";
import { Curso } from "./curso";

export class Escola {
  private alunos: Aluno[] = []
  private cursos: Curso[] = []

  addAluno(aluno: Aluno) {
    this.alunos.push(aluno)
  }

  addCurso(curso: Curso) {
    this.cursos.push(curso)
  }

  getCurso(id: number) {
    return this.alunos.find(aluno => aluno.id === id) as Curso | undefined
  }

  getAluno(id: number) {
    return this.cursos.find(curso => curso.id === id) as Aluno | undefined
  }
}

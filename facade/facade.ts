import { Escola } from "./escola";
import { Turma } from "./turma";

export class Facade {
  constructor( 
    private escola: Escola
  ) {}

  matricular(codAluno: number, codCurso: number, turma?: Turma) {
    if (!turma) {
      const curso = this.escola.getCurso(codCurso) 

      if (curso) {
        turma = new Turma(12, curso, this.escola)
        turma.setCurso(curso)
      }
    } 

    const aluno = this.escola.getAluno(codAluno)

    if (aluno && turma) {
      turma.addAluno(aluno)
    }
  }

  exibirStatus(turma: Turma) {
    console.log(turma.getNomeCurso())
    turma.mostrarAlunos()
  }
}

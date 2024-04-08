import { Facade } from "./facade";
import { Turma } from "./turma";

export class MatriculaGUI {
  constructor(
    private facade: Facade
  ) {}

  matricular(codAluno: number, codCurso: number, turma?: Turma) {
    this.facade.matricular(codAluno, codCurso, turma)
  }

  exibirStatus(turma: Turma) {
    this.facade.exibirStatus(turma)
  }
}

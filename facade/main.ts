import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Escola } from "./escola";
import { Facade } from "./facade";
import { MatriculaGUI } from "./matricula-gui";
import { Turma } from "./turma";

function main() {
  const escola = new Escola()

  escola.addAluno(new Aluno(1, 'Willy', '1'))
  escola.addAluno(new Aluno(2, 'Gui', '2'))
  escola.addAluno(new Aluno(3, 'Hiro', '3'))

  const cursoCienciaComputacao = new Curso(4, 'Ciência da Computação')

  escola.addCurso(cursoCienciaComputacao)

  const facade = new Facade(escola)
  const matriculaGui = new MatriculaGUI(facade)

  const turmaPOO = new Turma(17, cursoCienciaComputacao, escola)

  matriculaGui.matricular(1, 4, turmaPOO)
  matriculaGui.matricular(2, 4, turmaPOO)
  matriculaGui.matricular(3, 4, turmaPOO)

  matriculaGui.exibirStatus(turmaPOO)
}

main()

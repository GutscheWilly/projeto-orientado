import { INotificador } from "./i-notificador";
import { Usuario } from "./usuario";

export class App {
  private usuarios: Usuario[] = []

  constructor(
    usuarios?: Usuario[]
  ) {
    if (usuarios) {
      usuarios.forEach((usuario) => this.adicionarUsuario(usuario))
    }
  }

  adicionarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario)
  } 

  enviarNotificacao(mensagem: string, destinatario: Usuario, notificador: INotificador) {
    notificador.enviar(mensagem, destinatario)
  }

  enviarNotificacaoParaTodosUsuarios(mensagem: string, notificador: INotificador) {
    this.usuarios.forEach(usuario => this.enviarNotificacao(mensagem, usuario, notificador))
  }

  mostrarUsuarios() {
    console.log(this.usuarios)
  }
}

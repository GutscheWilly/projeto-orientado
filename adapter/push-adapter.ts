import { INotificador } from "./i-notificador";
import { Push } from "./push";
import { Usuario } from "./usuario";

export class PushAdapter implements INotificador {
  constructor(
    private push: Push
  ) {}

  enviar(mensagem: string, destinatario: Usuario): void {
    this.push.enviarPush(destinatario.idDispositivo, mensagem)
    destinatario.adicionarNotificacao(mensagem)
  }
}

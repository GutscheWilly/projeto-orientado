import { INotificador } from "./i-notificador";
import { Usuario } from "./usuario";

export class NotificadorEmail implements INotificador {
  enviar(mensagem: string, destinatario: Usuario): void {
    destinatario.adicionarNotificacao(mensagem)
    console.log(`Email enviado para ${destinatario.nome}`)
  }
}

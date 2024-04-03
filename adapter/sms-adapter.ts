import { INotificador } from "./i-notificador";
import { Sms } from "./sms";
import { Usuario } from "./usuario";

export class SmsAdapter implements INotificador {
  constructor(
    private sms: Sms
  ) {}

  enviar(mensagem: string, destinatario: Usuario): void {
    this.sms.enviarSMS(destinatario.numero, mensagem)
    destinatario.adicionarNotificacao(mensagem)
  }
}

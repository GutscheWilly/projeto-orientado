import { Usuario } from "./usuario";

export interface INotificador {
  enviar(mensagem: string, destinatario: Usuario): void
}

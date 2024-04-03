import { App } from "./app";
import { NotificadorEmail } from "./notificador-email";
import { Push } from "./push";
import { PushAdapter } from "./push-adapter";
import { Sms } from "./sms";
import { SmsAdapter } from "./sms-adapter";
import { Usuario } from "./usuario";

function main() {
  const usuarios: Usuario[] = [
    new Usuario('Willy', '12992337401', 127),
    new Usuario('Guilherme', '11994678', 342)
  ]

  const app = new App(usuarios)
  app.mostrarUsuarios()

  const notificadorEmail = new NotificadorEmail()
  app.enviarNotificacaoParaTodosUsuarios('Mandando EMAIL a todos os usuários', notificadorEmail)
  app.mostrarUsuarios()

  const sms = new Sms()
  const smsAdapter = new SmsAdapter(sms)
  app.enviarNotificacaoParaTodosUsuarios('Mandando SMS a todos os usuários', smsAdapter)
  app.mostrarUsuarios()

  const push = new Push()
  const pushAdapter = new PushAdapter(push)
  app.enviarNotificacaoParaTodosUsuarios('Mandando PUSH a todos os usuários', pushAdapter)
  app.mostrarUsuarios()
}

main()

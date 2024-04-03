export class Usuario {
  private notificacoes: string[] = []

  constructor(
    public nome: string,
    public numero: string,
    public idDispositivo: number
  ) {}

  mostrarNotificacoes() {
    this.notificacoes.forEach(console.log)
  }

  adicionarNotificacao(notificacoe: string) {
    this.notificacoes.push(notificacoe)
  }
}

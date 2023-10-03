import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Status from "App/Models/Status";

export default class extends BaseSeeder {
  public async run() {
    await Status.createMany([
      { nome: "Em aberto" },
      { nome: "Pedido realizado" },
      { nome: "Aguardando entrega" },
      { nome: "Aguardando pagamento" },
      { nome: "Pagamento parcial" },
      { nome: "Finalizado", finalizaPedido: true },
      { nome: "Cancelado", finalizaPedido: true },
    ]);
  }
}

import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import FormasPagamento from "App/Models/FormasPagamento";

export default class extends BaseSeeder {
  public async run() {
    await FormasPagamento.createMany([
      { nome: "Dinheiro" },
      { nome: "Pix" },
      { nome: "Débito" },
      { nome: "Crédito", variasParcelas: true },
      { nome: "Fiado" },
    ]);
  }
}

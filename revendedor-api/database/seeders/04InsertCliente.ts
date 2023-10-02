import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cliente from "App/Models/Cliente";

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      { nome: "Consumidor Final", dtUltimaCompra: undefined },
      // { nome: "Gabriel Wisky Benatti", dtUltimaCompra: new Date() },
    ]);
  }
}

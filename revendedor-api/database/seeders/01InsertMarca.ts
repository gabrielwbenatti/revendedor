import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Marca from "App/Models/Marca";

export default class extends BaseSeeder {
  public async run() {
    await Marca.createMany([
      { nome: "O Boticário" },
      { nome: "Natura" },
      { nome: "Eudora" },
      { nome: "Avon" },
      { nome: "Casa & Estilo" },
    ]);
  }
}

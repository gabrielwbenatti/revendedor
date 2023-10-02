import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Linha from "App/Models/Linha";

export default class extends BaseSeeder {
  public async run() {
    await Linha.createMany([
      { nome: "Nativa SPA", idMarca: 1 },
      { nome: "Make B", idMarca: 1 },
      { nome: "Cuide-se Bem", idMarca: 1 },
      { nome: "Boticollection", idMarca: 1 },
      { nome: "Ekos", idMarca: 2 },
      { nome: "Power Stay", idMarca: 2 },
      { nome: "Tododia", idMarca: 2 },
      { nome: "Kaiak", idMarca: 2 },
      { nome: "Cuide-se Bem", idMarca: 1 },
    ]);
  }
}

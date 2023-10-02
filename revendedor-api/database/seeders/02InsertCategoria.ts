import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Categoria from "App/Models/Categoria";

export default class extends BaseSeeder {
  public async run() {
    await Categoria.createMany([
      { nome: "Perfumaria" },
      { nome: "Maquiagem" },
      { nome: "Cuidados c/ Corpo" },
      { nome: "Cabelos" },
      { nome: "Cuidados c/ Rosto" },
      { nome: "Infantil" },
      { nome: "Cuidados c/ Barba" },
    ]);
  }
}

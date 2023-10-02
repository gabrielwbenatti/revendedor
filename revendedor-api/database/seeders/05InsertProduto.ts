import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Produto from "App/Models/Produto";

export default class extends BaseSeeder {
  public async run() {
    await Produto.createMany([
      {
        nome: "Polpa Desodorante Hidratante Corporal Ekos Açaí 200ml",
        refCatalogo: "108651",
        idMarca: 2,
        idLinha: 5,
        idCategoria: 3,
        vlVenda: 59.9,
      },
      {
        nome: "Creme Desodorante Hidratante Corporal Cuide-se Bem Deleite 400ml",
        refCatalogo: "108651",
        idMarca: 1,
        idLinha: 9,
        idCategoria: 3,
        vlVenda: 62.9,
      },
    ]);
  }
}

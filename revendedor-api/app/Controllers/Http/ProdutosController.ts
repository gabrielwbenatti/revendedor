import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Produto from "App/Models/Produto";

export default class ProdutosController {
  public async index({ response }: HttpContextContract): Promise<void> {
    const produtos = await Produto.query().select(
      "id",
      "nome",
      "vl_venda",
      "vl_custo",
      "estoque"
    );
    if (produtos != null) {
      response.ok(produtos);
      return;
    }
    response.noContent();
  }

  public async show({ params, response }: HttpContextContract): Promise<void> {
    const produto = await Produto.findBy("id", params.id);
    if (produto != null) {
      response.ok(produto);
      return;
    }
    response.noContent();
  }
}

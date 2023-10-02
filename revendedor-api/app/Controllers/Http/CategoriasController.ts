import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Categoria from "App/Models/Categoria";

export default class CategoriasController {
  public async index({ response }: HttpContextContract): Promise<void> {
    const categorias = await Categoria.query();
    if (categorias != null) {
      response.ok(categorias);
      return;
    }
    response.noContent();
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const body = request.body();
    const categoria = await Categoria.create({ nome: body.nome });

    if (categoria != null) {
      response.ok(categoria);
      return;
    }
    response.noContent();
  }
}

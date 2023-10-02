import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Marca from "App/Models/Marca";

export default class MarcasController {
  public async index({ response }: HttpContextContract): Promise<void> {
    const marcas = await Marca.query();
    if (marcas != null) {
      response.ok(marcas);
      return;
    }
    response.noContent();
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const body = request.body();
    const marcas = await Marca.create({ nome: body.nome });

    if (marcas != null) {
      response.ok(marcas);
      return;
    }
    response.noContent();
  }
}

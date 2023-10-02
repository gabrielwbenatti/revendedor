import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Linha from "App/Models/Linha";

export default class LinhasController {
  public async index({ params, response }: HttpContextContract): Promise<void> {
    const linhas = await Linha.query().where("idMarca", params.idMarca);
    if (linhas != null) {
      response.ok(linhas);
      return;
    }
    response.noContent();
  }

  public async store({
    request,
    params,
    response,
  }: HttpContextContract): Promise<void> {
    const body = request.body();
    const linhas = await Linha.create({
      nome: body.nome,
      idMarca: params.idMarca,
    });
    if (linhas != null) {
      response.ok(linhas);
      return;
    }
    response.noContent();
  }
}

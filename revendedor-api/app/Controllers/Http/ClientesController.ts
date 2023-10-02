import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Cliente from "App/Models/Cliente";

export default class ClientesController {
  public async index({ response }: HttpContextContract): Promise<void> {
    const clientes = await Cliente.query();
    if (clientes != null) {
      response.ok(clientes);
      return;
    }
    response.noContent();
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const body = request.body();
    const cliente = await Cliente.create({
      nome: body.nome,
      dtUltimaCompra: undefined,
    });
    if (cliente != null) {
      response.ok(cliente);
      return;
    }
    response.noContent();
  }
}

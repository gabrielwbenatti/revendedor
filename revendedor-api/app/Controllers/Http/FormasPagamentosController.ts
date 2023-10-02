import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import FormasPagamento from "App/Models/FormasPagamento";

export default class FormasPagamentosController {
  public async index({ response }: HttpContextContract): Promise<void> {
    const formasPagamentos = await FormasPagamento.query();
    if (formasPagamentos != null) {
      response.ok(formasPagamentos);
      return;
    }
    response.noContent();
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const body = request.body();
    const formaPagamento = await FormasPagamento.create({
      nome: body.nome,
      variasParcelas: body.variasParcelas ?? 0,
    });

    if (formaPagamento != null) {
      response.ok({
        id: formaPagamento.id,
      });
      return;
    }
    response.noContent();
  }
}

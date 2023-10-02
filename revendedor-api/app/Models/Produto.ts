import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public refCatalogo: string;

  @column()
  public unidade: string;

  @column()
  public vlVenda: number;

  @column()
  public estoque: number;

  @column()
  public vlCusto: number;

  @column()
  public vlCustoMedio: number;

  @column()
  public vlUltimaCompra: number;

  @column()
  public dtUltimaCompra: Date;

  @column()
  public dtUltimaVenda: Date;

  @column()
  public idMarca: number;

  @column()
  public idCategoria: number;

  @column()
  public idLinha: number;
}

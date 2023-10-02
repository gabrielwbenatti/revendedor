import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Marca extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;
}

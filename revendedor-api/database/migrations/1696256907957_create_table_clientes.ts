import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "clientes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome", 127).notNullable();
      table.date("dt_ultima_compra");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

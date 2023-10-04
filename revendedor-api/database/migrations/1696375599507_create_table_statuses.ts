import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "statuses";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome", 127).notNullable();
      table.boolean("pedido_fechado").notNullable().defaultTo(false);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

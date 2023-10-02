import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "marcas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome", 127).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

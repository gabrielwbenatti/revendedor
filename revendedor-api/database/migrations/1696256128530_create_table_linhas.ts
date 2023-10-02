import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "linhas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome", 127).notNullable();
      table
        .integer("id_marca")
        .notNullable()
        .unsigned()
        .references("marcas.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

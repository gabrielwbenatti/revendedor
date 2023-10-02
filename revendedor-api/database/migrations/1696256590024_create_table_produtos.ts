import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "produtos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome", 127).notNullable();
      table.string("ref_catalogo", 15).notNullable();
      table.string("unidade", 2).notNullable().defaultTo("UN");
      table.float("vl_venda").notNullable().defaultTo(0.0);
      table.integer("estoque").notNullable().defaultTo(0);
      table.float("vl_custo").notNullable().defaultTo(0.0);
      table.float("vl_custo_medio").notNullable().defaultTo(0.0);
      table.float("vl_ultima_compra").notNullable().defaultTo(0.0);
      table.date("dt_ultima_compra");
      table.date("dt_ultima_venda");
      table
        .integer("id_marca")
        .notNullable()
        .unsigned()
        .references("marcas.id");
      table
        .integer("id_categoria")
        .notNullable()
        .unsigned()
        .references("categorias.id");
      table
        .integer("id_linha")
        .notNullable()
        .unsigned()
        .references("linhas.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

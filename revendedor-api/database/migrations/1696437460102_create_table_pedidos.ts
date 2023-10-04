import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "pedidos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("id_cliente")
        .unsigned()
        .notNullable()
        .references("clientes.id");
      table.date("dt_solicitacao").notNullable();
      table.float("vl_subtotal").unsigned().notNullable().defaultTo(0.0);
      table.float("vl_descontos").unsigned().notNullable().defaultTo(0.0);
      table.float("vl_total").unsigned().notNullable().defaultTo(0.0);
      table.date("dt_entrega");
      table.date("dt_inclusao").notNullable().defaultTo(new Date());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

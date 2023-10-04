CREATE TABLE pedidos (
    id SERIAL NOT NULL,
    id_cliente INTEGER NOT NULL,
    dt_solicitacao DATE NOT NULL,
    vl_subtotal MONEY NOT NULL DEFAULT 0.00,
    vl_descontos MONEY DEFAULT 0.00,
    vl_total MONEY NOT NULL DEFAULT 0.00,
    dt_entrega DATE,
    dt_inclusao DATE DEFAULT NOW()
);

CREATE TABLE pedido_itens (
    id SERIAL NOT NULL,
    id_pedido INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    qtde INTEGER NOT NULL,
    vl_unitario MONEY NOT NULL,
    vl_total MONEY NOT NULL
);
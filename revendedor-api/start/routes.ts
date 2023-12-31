/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/", async () => {
    return { hello: "world" };
  });

  Route.get("/marcas", "MarcasController.index");
  Route.post("/marcas", "MarcasController.store");

  Route.get("/categorias", "CategoriasController.index");
  Route.post("/categorias", "CategoriasController.store");

  Route.get("/linhas/:idMarca", "LinhasController.index");
  Route.post("/linhas/:idMarca", "LinhasController.store");

  Route.get("/clientes", "ClientesController.index");
  Route.post("/clientes", "ClientesController.store");

  Route.get("/produtos", "ProdutosController.index");
  // Route.post("/produtos", "ProdutosController.store");
  Route.get("/produtos/:id", "ProdutosController.show");

  Route.get("/formas-pagamentos", "FormasPagamentosController.index");
  Route.post("/formas-pagamentos", "FormasPagamentosController.store");
}).prefix("api");

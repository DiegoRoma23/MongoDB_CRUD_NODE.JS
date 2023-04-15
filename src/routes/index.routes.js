import { Router } from "express";
import Produc from "../models/Task";

import {
  RenderPro,
  AddPro,
  EditPro,
  UpdatePro,
  EliminarPro,
  RenderProTab,
  RenderProTab1,
  RenderProTab2,
  RenderProTab3,
  RenderProTab4,
} from "../controllers/pro.controller";

const router = Router();

//Cargar Documento
router.get("/almacen", RenderPro);
//Añadir
router.post("/produc/add", AddPro);

//Pagina extra
// router.get("/query1", (req, res) => {
//   res.render("about");
// });

//Pagina de Alacen
router.get("/", RenderProTab);
router.get("/query1", RenderProTab1);
router.get("/query2", RenderProTab2);
router.get("/query3", RenderProTab3);
router.get("/query4", RenderProTab4);

//caragra Editar producto
router.get("/edit/:id", EditPro);

//Editar producto
router.post("/edit/:id", UpdatePro);

// Eliminar producto
router.get("/delete/:id", EliminarPro);

export default router;

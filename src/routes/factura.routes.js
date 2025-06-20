import express from "express";
import FacturaController from "../controllers/factura.controller.js";

class FacturaRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new FacturaController();
  }

  startRoutes() {
    this.router.post("/login", this.controller.postFactura);
    this.router.get("/facturas", this.controller.getFacturas);
    this.router.post("/facturas", this.controller.postFactura);
    this.router.get("/facturas/tipo/:tipo", this.controller.getPorTipo);
    this.router.get("/facturas/estado/:estado", this.controller.getPorEstado);
    this.router.patch("/facturas/:id", this.controller.patchFactura);
    this.router.delete("/facturas/:id", this.controller.deleteFactura);
    return this.router;
  }
}

export default FacturaRouter;

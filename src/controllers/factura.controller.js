import FacturaService from "../services/factura.service.js";

class FacturaController {
  constructor() {
    this.service = new FacturaService();
  }

  getFacturas = async (req, res) => {
    try {
      const allFacturas = await this.service.getFacturas();
      res.send(allFacturas);
    } catch (err) {
      res.status(500).send({ error: "Error al obtener facturas" });
    }
  };

  postFactura = async (req, res) => {
    try {
      const factura = req.body;
      const newFactura = await this.service.postFactura(factura);
      res.send(newFactura);
    } catch (err) {
      res.status(500).send({ error: "Error al crear factura" });
    }
  };

  putFactura = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedFactura = await this.service.putFactura(id, data);
      res.send(updatedFactura);
    } catch (err) {
      res.status(500).send({ error: "Error al reemplazar factura" });
    }
  };

  patchFactura = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const patchedFactura = await this.service.patchFactura(id, data);
      res.send(patchedFactura);
    } catch (err) {
      res.status(500).send({ error: "Error al actualizar factura" });
    }
  };

  deleteFactura = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedFactura = await this.service.deleteFactura(id);
      res.send(deletedFactura);
    } catch (err) {
      res.status(500).send({ error: "Error al eliminar factura" });
    }
  };

  getPorTipo = async (req, res) => {
    try {
      const { tipo } = req.params;
      const data = await this.service.getFacturasByTipo(tipo);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching facturas by tipo" });
    }
  };

  getPorEstado = async (req, res) => {
    try {
      const { estado } = req.params;
      const data = await this.service.getFacturasByEstado(estado);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching facturas by estado" });
    }
  };
}

export default FacturaController;

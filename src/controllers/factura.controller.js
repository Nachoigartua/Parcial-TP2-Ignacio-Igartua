import FacturaService from "../services/factura.service.js";

class FacturaController {
  constructor() {
    this.service = new FacturaService();
  }

  getFacturas = async (req, res) => {
    try {
      const allFacturas = await this.service.getFacturas();
      res.status(200).json(allFacturas);
    } catch (error) {
      res.status(500).json({ error: "Error fetching facturas" });
    }
  };

  postFactura = async (req, res) => {
    try {
      const factura = req.body;
      if (!factura || !factura.numero || !factura.tipo || !factura.monto || !factura.estado) {
        return res.status(400).json({ error: "Todos los campos de factura son requeridos" });
      }
      const postFactura = await this.service.postFactura(factura);
      res.status(201).json(postFactura);
    } catch (error) {
      res.status(500).json({ error: "Error creating factura" });
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

  patchFactura = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedFactura = req.body;
      if (!updatedFactura) {
        return res.status(400).json({ error: "Datos de factura requeridos" });
      }
      const result = await this.service.patchFactura(id, updatedFactura);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Error updating factura" });
    }
  };

  deleteFactura = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteFactura = await this.service.deleteFactura(id);
      res.status(200).json(deleteFactura);
    } catch (error) {
      res.status(500).json({ error: "Error deleting factura" });
    }
  };
}

export default FacturaController;

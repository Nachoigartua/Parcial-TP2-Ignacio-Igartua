import validation from "../utils/validation.js";
import Factory from "../models/Factory.js";

class FacturaService {
  constructor() {
    this.model = Factory.get(process.env.PERSISTENCE);
  }

  getFacturas = async () => {
    const allFacturas = await this.model.getFacturas();
    return allFacturas;
  };

  postFactura = async (factura) => {
    const validateFactura = validation.facturaSchema.validate(factura);
    if (validateFactura.error) {
      return "Error: " + validateFactura.error;
    } else {
      const postFactura = await this.model.postFactura(factura);
      return postFactura;
    }
  };

  getFacturasByTipo = async (tipo) => {
    const data = await this.model.getFacturasByTipo(tipo);
    return data;
  };

  getFacturasByEstado = async (estado) => {
    const data = await this.model.getFacturasByEstado(estado);
    return data;
  };

  patchFactura = async (id, update) => {
    const patchFactura = await this.model.patchFactura(id, update);
    return patchFactura;
  };

  deleteFactura = async (id) => {
    const deleteFactura = await this.model.deleteFactura(id);
    return deleteFactura;
  };
}

export default FacturaService;

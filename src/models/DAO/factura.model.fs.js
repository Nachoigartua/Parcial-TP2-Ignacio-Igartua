import fs from "fs";

class FacturaModelFS {
  constructor() {
    this.path = "facturas.txt";
  }

  getFacturas = async () => {
    const allFacturas = await fs.promises.readFile(this.path, "utf8");
    return JSON.parse(allFacturas);
  };

  postFactura = async (factura) => {
    const facturas = await this.getFacturas();
    factura.id =
      facturas.length <= 0
        ? (factura.id = 1)
        : facturas[facturas.length - 1].id + 1;
    facturas.push(factura);
    await fs.promises.writeFile(this.path, JSON.stringify(facturas), "utf-8");
    return factura;
  };

  getFacturasByTipo = async (tipo) => {
    const facturas = await this.getFacturas();
    let result = [];
    for (let f of facturas) {
      if (f.tipo === tipo) {
        result.push(f);
      }
    }
    return result;
  };

  getFacturasByEstado = async (estado) => {
    const facturas = await this.getFacturas();
    let result = [];
    for (let f of facturas) {
      if (f.estado === estado) {
        result.push(f);
      }
    }
    return result;
  };

  patchFactura = async (id, update) => {
    const facturas = await this.getFacturas();
    const index = facturas.findIndex((f) => f.id == id);
    if (index >= 0) {
      const newFactura = { ...facturas[index], ...update, id: Number(id) };
      facturas.splice(index, 1, newFactura);
      await fs.promises.writeFile(this.path, JSON.stringify(facturas), "utf-8");
      return newFactura;
    } else {
      return "Ocurrió un error al realizar la operación PATCH.";
    }
  };

  deleteFactura = async (id) => {
    const facturas = await this.getFacturas();
    const index = facturas.findIndex((f) => f.id == id);
    if (index >= 0) {
      facturas.splice(index, 1);
      await fs.promises.writeFile(this.path, JSON.stringify(facturas), "utf-8");
      return "La factura fue borrada.";
    } else {
      return "Ocurrió un error.";
    }
  };
}

export default FacturaModelFS;

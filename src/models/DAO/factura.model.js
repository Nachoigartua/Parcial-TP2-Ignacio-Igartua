class FacturaModel {
  constructor() {
    this.facturas = [
      { id: 1, numero: 100, tipo: "A", monto: 1500, estado: "pendiente" },
      { id: 2, numero: 101, tipo: "B", monto: 2500, estado: "pagada" },
      { id: 3, numero: 102, tipo: "C", monto: 3500, estado: "anulada" }
    ]
  }

  getFacturas = async () => {
    return this.facturas;
  };

  postFactura = async (newFactura) => {
    newFactura.id = this.facturas.length ? this.facturas[this.facturas.length - 1].id + 1 : 1;
    this.facturas.push(newFactura);
    return newFactura;
  };

  getFacturasByTipo = async (tipo) => {
    let result = [];
    for (let f of this.facturas) {
      if (f.tipo === tipo) {
        result.push(f);
      }
    }
    return result;
  };

  getFacturasByEstado = async (estado) => {
    let result = [];
    for (let f of this.facturas) {
      if (f.estado === estado) {
        result.push(f);
      }
    }
    return result;
  };

  patchFactura = async (id, updatedFactura) => {
    const index = this.facturas.findIndex(f => f.id == id);
    if (index != -1) {
      this.facturas[index] = { ...this.facturas[index], ...updatedFactura };
      return this.facturas[index];
    }
    return "Error: el indice no existe";
  }

  deleteFactura = async (id) => {
    const index = this.facturas.findIndex(f => f.id == id);
    if (index >= 0) {
      this.facturas.splice(index, 1);
      return "La factura fue borrada.";
    } else {
      return "Ocurrió un error.";
    }
  }
}

export default FacturaModel;

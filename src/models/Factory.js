import FacturaModel from "./DAO/factura.model.js";
import FacturaModelFS from "./DAO/factura.model.fs.js";

class Factory {
  static get(persistence) {
    switch (persistence) {
      case "fs":
        console.log("File System persistencia");
        return new FacturaModelFS();
      case "memory":
      default:
        console.log("Memory persistencia");
        return new FacturaModel();
    }
  }
}

export default Factory;

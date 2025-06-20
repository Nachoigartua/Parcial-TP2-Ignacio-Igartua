import FacturaModel from "./DAO/factura.model.js";
import FacturaModelFS from "./DAO/factura.model.fs.js";
import FacturaModelMongo from "./DAO/factura.model.mongo.js";

class Factory {
  static get(persistence, mongoDB) {
    switch (persistence) {
      case "fs":
        console.log("File System persistencia");
        return new FacturaModelFS();
      case "mongo":
        console.log("MongoDB persistencia");
        return new FacturaModelMongo(mongoDB);
      case "memory":
      default:
        console.log("Memory persistencia");
        return new FacturaModel();
    }
  }
}

export default Factory;
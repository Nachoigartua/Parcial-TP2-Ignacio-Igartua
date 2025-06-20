import MongoConnection from "../MongoConnection.js";
// esto es para trabajar con el obj de id de mongo
import {ObjectId} from "mongodb"
class FacturaModelMongo {
  constructor() {
    this.db = MongoConnection.db
  }

  async getFacturas() {
    const facturas = await this.db.collection("facturas").find({}).toArray()
    return facturas;
  }

  async postFactura(factura) {
    const result = await this.db.collection("facturas").insertOne(factura);
    return { ...factura, _id: result.insertedId };
  }

  async putFactura(id, update) {
    //createFromHexString convierte un string (el q viene por req.params) en un objeto mongo db
    await this.db.collection("facturas").replaceOne(
      { _id: ObjectId.createFromHexString(id) },
      update
    );
    return update;
  }

  async patchFactura(id, update) {
    await this.db.collection("facturas").updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: update }
    );
    return update;
  }

  async deleteFactura(id) {
    const usrDelete = await this.db.collection("facturas").deleteOne(
      { _id: ObjectId.createFromHexString(id) }
    );
    return usrDelete;
  }
}

export default FacturaModelMongo;

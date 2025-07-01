import { DBConnection } from "@domain/interfaces/dbconnection.interface";
import mongoose, { Mongoose } from "mongoose";

export default class MongooseService implements DBConnection {
  constructor(
    public dbUrl: string,
    private readonly mongo: Mongoose = mongoose,
    public options?: {},
  ) {}

  async connect(): Promise<this> {
    await this.mongo
      .connect(this.dbUrl, {
        ...this.options,
      })
      .then(() => {
        console.log("MongoDB: Connection stablished");
      });

    return this;
  }

  async disconnect() {
    await this.mongo.disconnect().then(() => {
      console.log("MongoDB: Disconnected");
    });
  }
}

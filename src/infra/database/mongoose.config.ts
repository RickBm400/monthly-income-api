import { Mongoose } from "mongoose";

export default class MongooseService {
  constructor(private readonly mongoose: Mongoose) {}

  async connect(url: string, options?: {}): Promise<MongooseService> {
    await this.mongoose.connect(url, {
      ...options,
    });

    return this;
  }

  async disconnect() {
    await this.mongoose.disconnect();
  }
}

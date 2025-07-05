import User from "@domain/entities/user.entity";
import { IUserSchema, UserModel } from "@infra/schemas";
import { Document } from "mongoose";

export default class UserRepository {
  constructor(private readonly userModel: typeof UserModel = UserModel) {}

  async createNewUser(payload: any) {
    await this.userModel.deleteMany({});
    const _newUser: Document = new this.userModel(payload);
    if (!_newUser) throw new Error("Invalid user data");
    const saved = await _newUser.save();

    return {
      user: new User(saved.toObject()),
    };
  }
}

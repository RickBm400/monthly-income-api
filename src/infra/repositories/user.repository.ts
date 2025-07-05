import User from "@domain/entities/user.entity";
import { UserModel } from "@infra/schemas";

export default class UserRepository {
  constructor(private readonly userModel: typeof UserModel = UserModel) {}

  async createNewUser(payload: any) {
    const _newUser = new this.userModel(payload);
    if (!_newUser) throw new Error("Invalid user data");
    await _newUser.save().then((user) => {
      return new User(user);
    });
    return {
      user: _newUser,
    };
  }
}

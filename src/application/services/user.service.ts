import UserRepository from "@infra/repositories/user.repository";

export default class UserService {
  constructor(
    private readonly userRepository: UserRepository = new UserRepository(),
  ) {}

  async postNewUser(payload: any) {
    return await this.userRepository.createNewUser(payload);
  }
}

import { UserOutputDTO } from "@application/dtos/outputs/user-output.dto";
import UserRepository from "@infra/repositories/user.repository";

export default class UserService {
  constructor(
    private readonly userRepository: UserRepository = new UserRepository(),
  ) {}

  async postNewUser(payload: any) {
    const user = await this.userRepository.createNewUser(payload);

    return UserOutputDTO.create(user.user);
  }
}

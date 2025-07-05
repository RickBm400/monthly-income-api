import { DTOBaseClass } from "../base.dto";

interface params {
  name: string;
  email: string;
  profilePicture: string;
}

export class UserOutputDTO extends DTOBaseClass<UserOutputDTO> {
  constructor(params: params) {
    super();
    Object.assign(this, params);
  }

  static create({ email, name, profilePicture }: params) {
    return new UserOutputDTO({
      email,
      name,
      profilePicture,
    });
  }
}

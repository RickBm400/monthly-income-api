import { IsEmail, IsNotEmpty, IsString } from "class-validator";

import { DTOBaseClass } from "../base.dto";

export class NewUserInputDTO extends DTOBaseClass<NewUserInputDTO> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;

  @IsString()
  profilePicture: string;

  constructor(params: Partial<NewUserInputDTO>) {
    super();
    Object.assign(this, params);
  }

  static create(params: Partial<NewUserInputDTO>) {
    return new NewUserInputDTO(params);
  }
}

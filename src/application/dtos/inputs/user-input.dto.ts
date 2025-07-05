import {
  IsEmail,
  IsNotEmpty,
  IsString,
  validateOrReject,
} from "class-validator";
import { validate, ValidationError } from "class-validator";

export class NewUserInputDTO {
  @IsString()
  @IsNotEmpty({
    message: "name cant be empty",
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  password: string;

  @IsString()
  profilePicture: string;

  constructor(params: Partial<NewUserInputDTO>) {
    Object.assign(this, params);
  }

  static async Set(params: Partial<NewUserInputDTO>) {
    const _instance = new NewUserInputDTO(params);
    const validation = await validate(_instance);
    if (validation.length) {
      throw new Error(
        JSON.stringify(JSON.parse(JSON.stringify(validation[0].constraints))),
      );
    }
    return _instance;
  }
}

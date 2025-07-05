import { validate } from "class-validator";

export abstract class DTOBaseClass<T> {
  async validate() {
    const validation = await validate(this);
    if (validation.length) {
      throw new Error(
        JSON.stringify(JSON.parse(JSON.stringify(validation[0].constraints))),
      );
    }
    return this as unknown as T;
  }
}

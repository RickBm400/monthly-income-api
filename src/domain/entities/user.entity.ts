export default class User {
  id: string;
  name: string;
  profilePicture: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: Partial<User>) {
    Object.assign(this, params);
  }
}

import { Schema, Document, model } from "mongoose";

export interface IUserSchema extends Document {
  name: string;
  profilePicture: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserSchema>(
  {
    name: {
      type: String,
      required: false,
    },
    profilePicture: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

UserSchema.pre("save", async (next) => {
  const user = await UserModel.findOne({ email: (this as any).email });
  if (!user) next();
  return next(new Error("duplicated user email"));
});

export const UserModel = model<IUserSchema>("users", UserSchema);

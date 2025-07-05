import { Schema, model, Document } from "mongoose";
import { MovementStatus } from "@domain/entities/movement.entity";

export interface IMovement extends Document {
  amount: number;
  type: string;
  details: string;
  accountId: string;
  userId: string;
  status: MovementStatus;
  createdAt: Date;
  updatedAt: Date;
}

const MovementSchema = new Schema<IMovement>(
  {
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    details: { type: String, required: true },
    accountId: { type: String, required: true },
    userId: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(MovementStatus),
      default: MovementStatus.PENDING,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

export const MovementModel = model<IMovement>("Movement", MovementSchema);

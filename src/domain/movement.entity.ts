export enum MovementStatus {
  PENDING = "PENDING",
  COMPLETED = "APPROVED",
  TRANSFERRED = "TRANSFERRED",
  DELETED = "DELETED",
}

export class Movement {
  id: string;
  amount: number;
  type: string;
  details: string;
  accountId: string;
  userId: string;
  status: MovementStatus;

  createdAt: Date;
  updatedAt: Date;

  constructor(params: Partial<Movement>) {
    Object.assign(this, params);
  }
}

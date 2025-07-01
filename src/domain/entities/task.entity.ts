export enum Priority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  URGENT = 4,
}

export class Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: Partial<Task>) {
    Object.assign(this, params);
  }
}

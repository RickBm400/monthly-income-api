export enum AccountType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  SAVINGS = "SAVINGS",
  POCKET = "POCKET",
}

export enum PaymentNetwork {
  VISA = "VISA",
  MASTER_CARD = "MASTER_CARD",
  AMERICAN_EXPRESS = "AMERICAN_EXPRESS",
}

export class Account {
  accountType: AccountType;
  balance: number;
  paymentNetwork: PaymentNetwork;
  owner: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: Partial<Account>) {
    Object.assign(this, params);
  }
}

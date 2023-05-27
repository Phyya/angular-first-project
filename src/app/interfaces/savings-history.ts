export type ISavingsHistory = SavingsHistory[];

export interface SavingsHistory {
  id: number;
  date: Date;
  description: string;
  amount: number;
  status: string;
}

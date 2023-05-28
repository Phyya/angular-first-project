export type ISavingsHistory = SavingsHistory[];

export interface SavingsHistory {
  id: number;
  date: string | null;
  description: string;
  amount: number;
  status: string;
}

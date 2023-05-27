export type IUserTargets = UserTargets[];

export interface UserTargets {
  id: number;
  name: string;
  category: string;
  amount: number;
  target_amount: number;
  modalOpen: boolean;
}

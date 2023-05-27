import { Component } from '@angular/core';
import { TableColumn } from 'src/app/components/table/table.component';
import { SavingsHistory } from 'src/app/interfaces/savings-history';
import { UserTargets } from 'src/app/interfaces/user-targets';

@Component({
  selector: 'app-savestar',
  templateUrl: './savestar.component.html',
  styleUrls: ['./savestar.component.css'],
})
export class SavestarComponent {
  totalSavings: string;
  categoryOpen: number = 0;
  defaultSavings: UserTargets = {
    id: 0,
    name: "Ope's Birthday",
    category: 'LockIt',
    amount: 2000,
    target_amount: 50000,
    modalOpen: false,
  };
  activeSavings: UserTargets;
  userTargets: UserTargets[] = [
    {
      id: 1,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 2000,
      target_amount: 50000,
      modalOpen: false,
    },
    {
      id: 2,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 90000,
      target_amount: 100000,
      modalOpen: false,
    },
    {
      id: 3,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 75000,
      target_amount: 100000,
      modalOpen: false,
    },
    {
      id: 4,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 3000,
      target_amount: 100000,
      modalOpen: false,
    },
    {
      id: 5,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 2000,
      target_amount: 100000,
      modalOpen: false,
    },
    {
      id: 6,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 2000,
      target_amount: 100000,
      modalOpen: false,
    },
    {
      id: 7,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 2000,
      target_amount: 100000,
      modalOpen: false,
    },
    {
      id: 8,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 2000,
      target_amount: 100000,
      modalOpen: false,
    },
    {
      id: 9,
      name: "Ope's Birthday",
      category: 'LockIt',
      amount: 2000,
      target_amount: 100000,
      modalOpen: false,
    },
  ];

  tableColumns: TableColumn[] = [
    { header: 'S/N', field: 'id' },
    { header: 'Date', field: 'date' },
    { header: 'Description', field: 'description' },
    { header: 'Amount', field: 'amount' },
    { header: 'Status', field: 'status' },
  ];

  tableData: SavingsHistory[] = [
    {
      id: 1,
      date: new Date(),
      description: 'Spend ‘2’ Save Credited',
      amount: 4000,
      status: 'Successful',
    },
    {
      id: 2,
      date: new Date(),
      description: 'Lockit',
      amount: 11000,
      status: 'Unsuccessful',
    },
    {
      id: 3,
      date: new Date(),
      description: 'Spend ‘2’ Save Credited',
      amount: 2000,
      status: 'Pending',
    },
    {
      id: 4,
      date: new Date(),
      description: 'Spend ‘2’ Save Credited',
      amount: 4000,
      status: 'Successful',
    },
  ];
  isModalVisible: boolean = false;

  constructor() {
    this.totalSavings = '₦638,680.00';
    this.activeSavings = this.defaultSavings;
  }
  calculateProgress(target: UserTargets): number {
    return (target.amount / target.target_amount) * 100;
  }
  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  openModal(id: number) {
    // Check if the modal is not currently visible
    if (!this.isModalVisible) {
      // Find the box object based on the provided id and open the modal
      const category = this.userTargets.find((category) => category.id === id);
      if (category) {
        console.log('hiiii from open');
        this.activeSavings = category;
        this.toggleModal(); // Open the modal
      }
    }
  }

  closeModal(): void {
    this.toggleModal();
    console.log(this, 'this this');
    console.log(this.activeSavings, 'Befor');
    this.activeSavings = this.defaultSavings;
    // console.log(this.isModalVisible, 'is modal visible');
    // this.isModalVisible = !this.isModalVisible;
    console.log(this.activeSavings, 'After');
  }
}

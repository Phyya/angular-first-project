import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userDetails } from 'src/app/shared/data/data';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  identifier: string = '';
  activeTab: string = 'active';
  userDetails: userDetails =
    JSON.parse(localStorage.getItem('opti-user-detail')) ?? {};
  contentData: any = [
    {
      identifier: 'spend2save',
      title: 'Spend ‘2’ Save',
      description:
        'Are you tired of feeling like your hard-earned money slips through your fingers? Providing the best fix for your money problems: Save as much as you spend.',
      imagePath: '../../../assets/images/spend2save.svg',
      activeSavings:
        this.userDetails.plans.find((plan) => {
          console.log(plan, 'the plan iterator');
          return plan.name == this.identifier;
        }) ?? [],
      // [
      // {
      //   name: 'JAPA Plans',
      //   amount: 300000,
      //   interestPaid: 100,
      //   interestEarned: 200,
      // },
      // {
      //   name: 'JAPA Plans',
      //   amount: 500000,
      // },
      // {
      //   name: 'JAPA Plans',
      //   amount: 700000,
      // },
      // ]
      pastSavings: [
        {
          name: 'JAPA Plans - past',
          amount: 300000,
        },
        {
          name: 'JAPA Plans -past2',
          amount: 500000,
        },
      ],
    },
    {
      identifier: 'fixsave',
      title: 'FixSave',
      description:
        'Want to save towards a specific goal but find it difficult to be consistent? Start with your journey today and embrace the power of consistency.',
      imagePath: '../../../assets/images/fixsave.svg',
    },
    {
      identifier: 'percentwise',
      title: 'PercentWise',
      description:
        'Introducing the game-changing strategy to boost your savings: Set aside a percentage of your income every day, every week, or every month!',
      imagePath: '../../../assets/images/percentage.svg',
    },
    {
      identifier: 'cashback',
      title: 'CashBack Loan',
      description:
        'Introducing our revolutionary Cashback Loan, designed to give you the best of both worlds',
      imagePath: '../../../assets/images/cashback.svg',
    },
  ];
  activePage: any = {};
  isFormVisible: boolean = false;
  forms: { [key: string]: boolean } = {
    spend2save: false,
    fixsave: false,
    percentwise: false,
  };

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  updateDataFromLocalStorage(): void {
    console.log('updating parent');
    const updatedData = JSON.parse(localStorage.getItem('opti-user-detail'));
    console.log(updatedData, 'the updated Data');
    this.userDetails = updatedData;
    this.cdr.markForCheck(); // Manually trigger change detection
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.identifier = params['identifier'];
      console.log(this.identifier, 'the identifier');
      let active = this.contentData.find(
        (item: any) => item.identifier === this.identifier
      );
      console.log(active, 'the active');
      console.log(this.userDetails.plans, 'the plans');
      console.log(
        this.userDetails.plans.filter((plan) => plan.name == this.identifier),
        'the plans found'
      );
      this.activePage = {
        ...active,
        activeSavings:
          this.userDetails.plans.find((plan) => plan.name == this.identifier)
            ?.active ?? [],
        pastSavings:
          this.userDetails.plans.find((plan) => plan.name == this.identifier)
            ?.past ?? [],
      };
    });
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  toggleModal(title: string) {
    // if (title && this.forms.hasOwnProperty(title)) {
    // }
    this.isFormVisible = !this.isFormVisible;
    this.forms[title] = !this.forms[title];
  }
  openModal(title: string) {
    console.log(title, 'title opening');

    // if (!this.isFormVisible) {
    //   this.toggleModal();
    // }
    console.log(this.forms[title], 'is form open');
    if (title && this.forms.hasOwnProperty(title)) {
      this.forms[title] = true;
    } else console.log('nothing jare');
  }
  closeModal() {
    console.log('close');
  }
}

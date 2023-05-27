import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  identifier: string = '';
  activeTab: string = 'active';
  contentData: any = [
    {
      identifier: 'spend2save',
      title: 'Spend ‘2’ Save',
      description: 'lorem ipsum dolor sit amet, consectetur adipis',
      imagePath: '../../../assets/images/spend2save.svg',
      activeSavings: [
        {
          name: 'JAPA Plans',
          amount: 300000,
        },
        {
          name: 'JAPA Plans',
          amount: 500000,
        },
        {
          name: 'JAPA Plans',
          amount: 700000,
        },
      ],
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
      description: 'lorem ipsum dolor sit amet, consectetur adipis',
      imagePath: '../../../assets/images/fixsave.svg',
    },
    {
      identifier: 'percentwise',
      title: 'PercentWise',
      description: 'lorem ipsum dolor sit amet, consectetur adipis',
      imagePath: '../../../assets/images/percentage.svg',
    },
    {
      identifier: 'cashback',
      title: 'CashBack Loan',
      description: 'lorem ipsum dolor sit amet, consectetur adipis',
      imagePath: '../../../assets/images/cashback.svg',
    },
  ];
  activePage: any = {};
  isFormVisible: boolean = false;
  forms: { [key: string]: boolean } = {
    spend2save: false,
    fixSave: false,
    percentwise: false,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.identifier = params['identifier'];
      let active = this.contentData.find(
        (item: any) => item.identifier === this.identifier
      );
      console.log(active, 'the active');
      this.activePage = active;
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

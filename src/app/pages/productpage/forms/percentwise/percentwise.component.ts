import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-percentwise',
  templateUrl: './percentwise.component.html',
  styleUrls: ['./percentwise.component.css'],
})
export class PercentwiseComponent implements OnChanges, OnInit {
  @Input() openForm: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataUpdated: EventEmitter<any> = new EventEmitter<any>();
  isFormVisible: boolean = false;
  productForm: FormGroup;
  durationMode: boolean = false;
  amountMode: boolean = false;
  checkboxChecked: boolean = false;
  loading: boolean = false;
  success: boolean = false;
  endDate: string = '';
  errorText: string = '';
  user = JSON.parse(localStorage.getItem('opti-user-detail'));

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['openForm'] && changes['openForm'].currentValue) {
      this.openModal();
    }
  }

  openModal(): void {
    this.isFormVisible = true;
  }

  closeModal(): void {
    console.log('closing in modal');
    this.onClose.emit();
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      targetName: new FormControl(null, Validators.required),
      description: new FormControl(null),
      frequency: new FormControl(null, Validators.required),
      termsAndConditions: new FormControl(false, Validators.required),
      deductionAmount: new FormControl(0, Validators.required),
      endDate: new FormControl(null, this.durationMode && Validators.required),
    });
    this.productForm.valueChanges.subscribe((changes) => {
      this.errorText = '';
    });
  }
  validatePercentage() {
    const value = this.productForm.value.deductionAmount;
    if (value > 100 || value < 1) {
      this.errorText = 'Please enter a valid percentage';
      return {
        invalidPercentage: true,
      };
    }
    return null;
  }
  validateForm(): boolean {
    const formValues = this.productForm.value;
    const isCheckboxChecked = formValues.termsAndConditions;
    this.validatePercentage();

    for (const controlName in this.productForm.controls) {
      if (this.productForm.controls.hasOwnProperty(controlName)) {
        const control = this.productForm.controls[controlName];
        if (control.invalid) {
          return false;
        }
      }
    }

    return isCheckboxChecked;
  }
  refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  closeCreatePlan(formValues): void {
    const percentPlan =
      this.user.plans.find((plan) => plan.name == 'percentwise') ?? {};
    const userPlans = this.user.plans.filter(
      (plan) => plan.name !== 'percentwise'
    );
    if (percentPlan.active) percentPlan.active.push(formValues);
    else {
      console.log('no active so pushing');
      percentPlan.name = 'percentwise';
      percentPlan.active = [];
      percentPlan.past = [];
      percentPlan.active.push(formValues);
    }

    localStorage.setItem(
      'opti-user-detail',
      JSON.stringify({
        ...this.user,
        balance:
          this.user.balance -
          (this.productForm.value.deductionAmount / 100) * this.user.balance,
        totalSavingsBalance:
          this.user.totalSavingsBalance + formValues.deductionAmount,
        history: [
          {
            description: `PercentWise plan - ${formValues.targetName} created`,
            date: new Date(),
          },
          {
            description: `PercentWise plan - ${formValues.targetName} credited`,
            amount:
              (this.productForm.value.deductionAmount / 100) *
              this.user.balance,
            date: new Date(),
          },
          ...this.user.history,
        ],
        plans: [...userPlans, percentPlan],
      })
    );
    this.closeModal();
    this.refreshPage();
    this.dataUpdated.emit();
  }
  onSubmit() {
    console.log('is submitting');
    const formValues = {
      startDate: new Date(),
      balance:
        (this.productForm.value.deductionAmount / 100) * this.user.balance,
      target_amount:
        (this.productForm.value.deductionAmount / 100) * this.user.balance,
      category: 'percentwise',
      ...this.productForm.value,
      endDate: this.endDate ? this.endDate : this.productForm.value.endDate,
    };
    console.log(this.productForm.value.endDate, 'form end date');
    this.loading = true;
    setTimeout(() => {
      this.success = true;
      setTimeout(() => {
        this.closeCreatePlan(formValues);
      }, 1000);
    }, 2000);

    console.log(formValues, 'formValues');
  }
  checkSelectedOption(modeValue: string) {
    if (modeValue === 'amount') {
      this.durationMode = false;
      this.amountMode = true;
    } else if (modeValue === 'duration') {
      this.durationMode = true;
      this.amountMode = false;
    }

    console.log(modeValue, 'selected mode');
  }
}

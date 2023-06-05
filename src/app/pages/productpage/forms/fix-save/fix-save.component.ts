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

@Component({
  selector: 'app-fix-save',
  templateUrl: './fix-save.component.html',
  styleUrls: ['./fix-save.component.css'],
})
export class FixSaveComponent implements OnChanges, OnInit {
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
  calculationMode: boolean = true;
  calculatedDate: string = '';
  calculatedAmount: string = '';
  errorText: string = '';

  constructor(private formBuilder: FormBuilder) {}

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
    // this.productForm = this.formBuilder.group({
    //   // Define your form controls here
    //   // Example:
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   // ...
    // });
    this.productForm = new FormGroup({
      targetName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      mode: new FormControl(null, Validators.required),
      targetAmount: new FormControl(null),
      frequency: new FormControl(null, Validators.required),
      termsAndConditions: new FormControl(false, Validators.required),
      deductionAmount: new FormControl(
        null,
        this.amountMode && Validators.required
      ),
      endDate: new FormControl(null, this.durationMode && Validators.required),
    });
    this.productForm.valueChanges.subscribe((changes) => {
      this.calculatedDate = '';
      this.calculatedAmount = '';
      this.errorText = '';
    });
  }
  validateForm(): boolean {
    const formValues = this.productForm.value;
    const isCheckboxChecked = formValues.termsAndConditions;

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
  closeCreatePlan(formValues): void {
    const user = JSON.parse(localStorage.getItem('opti-user-detail'));
    const fixsavePlan = user.plans.find((plan) => plan.name == 'fixsave') ?? {};
    console.log(fixsavePlan, 'the fix plan');
    const userPlans = user.plans.filter((plan) => plan.name !== 'fixsave');
    if (fixsavePlan.active) fixsavePlan.active.push(formValues);
    else {
      console.log('no active so pushing');
      fixsavePlan.name = 'fixsave';
      fixsavePlan.active = [];
      fixsavePlan.past = [];

      fixsavePlan.active.push(formValues);
    }

    localStorage.setItem(
      'opti-user-detail',
      JSON.stringify({
        ...user,
        balance: user.balance - formValues.deductionAmount,
        totalSavingsBalance:
          user.totalSavingsBalance + formValues.deductionAmount,
        history: [
          {
            description: 'FixSave Plan Created',
            date: new Date(),
          },
          {
            description: 'FixSave Plan Credited',
            amount: formValues.deductionAmount,
            date: new Date(),
          },
          ...user.history,
        ],
        plans: [...userPlans, fixsavePlan],
      })
    );
    this.closeModal();
    this.dataUpdated.emit();
  }
  onSubmit() {
    const formValues = {
      startDate: new Date(),
      balance: this.productForm.value.deductionAmount,
      target_amount: this.productForm.value.targetAmount ?? null,
      category: 'fixSave',
      ...this.productForm.value,
    };
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
  calculatPlan(): any {
    let formValidated = this.validateForm();
    console.log(this.productForm.value, 'form values');
    console.log(formValidated, 'formvlaidated');
    for (const controlName in this.productForm.controls) {
      if (this.productForm.controls.hasOwnProperty(controlName)) {
        const control = this.productForm.controls[controlName];
        if (control.invalid) {
          this.errorText = 'Please enter all fields';
          return false;
        }
      }
    }

    let today = new Date();
    let futureDate = new Date();
    if (this.amountMode) {
      let calculatedPeriod = Math.ceil(
        this.productForm.value.targetAmount /
          this.productForm.value.deductionAmount
      );
      if (this.productForm.value.frequency == 'daily') {
        futureDate.setDate(today.getDate() + calculatedPeriod);
      }
      if (this.productForm.value.frequency == 'weekly') {
        futureDate.setDate(today.getDate() + calculatedPeriod * 7);
      }
      if (this.productForm.value.frequency == 'monthly') {
        futureDate.setMonth(today.getMonth() + calculatedPeriod);
      }
      this.calculatedDate = futureDate.toLocaleDateString();
    }
    let targetToSave;
    if (this.durationMode) {
      let futureDate = new Date(this.productForm.value.endDate);
      const timeDiff = Math.abs(today.getTime() - futureDate.getTime());

      if (this.productForm.value.frequency == 'daily') {
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        targetToSave = this.productForm.value.deductionAmount * daysDiff;
      }
      if (this.productForm.value.frequency == 'weekly') {
        const weeksDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 7));
        targetToSave = this.productForm.value.deductionAmount * weeksDiff;
      }
      if (this.productForm.value.frequency == 'monthly') {
        const yearDiff = futureDate.getFullYear() - today.getFullYear();
        const monthDiff = futureDate.getMonth() - today.getMonth();
        const monthsDiff = yearDiff * 12 + monthDiff;
        targetToSave = this.productForm.value.deductionAmount * monthsDiff;
      }
      this.calculatedAmount = targetToSave;
    }
    console.log(futureDate, 'the future Date');
  }
  proceed(): void {
    this.calculationMode = false;
  }
}

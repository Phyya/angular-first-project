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
  selector: 'app-spend2save',
  templateUrl: './spend2save.component.html',
  styleUrls: ['./spend2save.component.css'],
})
export class Spend2saveComponent implements OnChanges, OnInit {
  @Input() openForm: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataUpdated: EventEmitter<any> = new EventEmitter<any>();
  isFormVisible: boolean = false;
  productForm: FormGroup;
  durationMode: boolean = false;
  targetMode: boolean = false;
  checkboxChecked: boolean = false;
  loading: boolean = false;
  success: boolean = false;

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
      endDate: new FormControl(null, Validators.required),
      percentage: new FormControl(null, Validators.required),
      termsAndConditions: new FormControl(false, Validators.required),
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
    const spend2savePlan =
      user.plans.find((plan) => plan.name == 'spend2save') ?? {};
    console.log(spend2savePlan, 'the spend2 saveplan');
    const userPlans = user.plans.filter((plan) => plan.name !== 'spend2save');
    if (spend2savePlan.active) spend2savePlan.active.push(formValues);
    else {
      console.log('no active so pushing');
      spend2savePlan.name = 'spend2save';
      spend2savePlan.active = [];
      spend2savePlan.past = [];
      spend2savePlan.active.push(formValues);
    }

    localStorage.setItem(
      'opti-user-detail',
      JSON.stringify({
        ...user,
        history: [
          {
            description: `Spend2save plan - ${formValues.targetName} created`,
            date: new Date(),
          },
          ...user.history,
        ],
        plans: [...userPlans, spend2savePlan],
      })
    );
    this.closeModal();
    this.dataUpdated.emit();
  }
  onSubmit() {
    const formValues = {
      startDate: new Date(),
      balance: 0,
      category: 'spend2save',
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
    // Perform actions based on the selected mode
    if (modeValue === 'target') {
      this.durationMode = false;
      this.targetMode = true;
      // Do something for option 1
    } else if (modeValue === 'duration') {
      // Do something for option 2
      this.durationMode = true;
      this.targetMode = false;
    }

    console.log(modeValue, 'selected mode');
  }
}

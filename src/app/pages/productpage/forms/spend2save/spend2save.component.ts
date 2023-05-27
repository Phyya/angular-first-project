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
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-spend2save',
  templateUrl: './spend2save.component.html',
  styleUrls: ['./spend2save.component.css'],
})
export class Spend2saveComponent implements OnChanges, OnInit {
  // isFormVisible: boolean = false;
  // @Input() openForm: boolean = false;
  // @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  // openModal(): void {
  //   this.isFormVisible = true;
  // }
  // closeModal(): void {
  //   this.openForm = false;
  // }

  isFormVisible: boolean = false;

  @Input() openForm: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  // formGroup: FormGroup = {};

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
    // this.formGroup = this.formBuilder.group({
    //   // Define your form controls here
    //   // Example:
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   // ...
    // });
  }

  onSubmit() {
    // const formValues = this.formGroup.value;
    // Make your API request using the form values
    // Example:
    // this.yourService.postFormData(formValues).subscribe(response => {
    //   // Handle the response
    // });
  }
}

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, NgModule, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  showFormContent: boolean = true;

  userName: string = '';
  phoneNumber: string = '';

  SendForm(): void {
    this.showFormContent = false;
    this.userName = this.myForm!.get('name')?.value;
    this.phoneNumber = this.myForm!.get('phoneNumber')?.value;
  }

  myForm: FormGroup | undefined;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.myForm!.value);
  }
}

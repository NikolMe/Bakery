import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, NgModule, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {$} from "protractor";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  showFormContent: boolean = true;
  userName: string = '';
  phoneNumber: string = '';

  SendForm(): void {
    this.showFormContent = false;
    this.userName = this.myForm!.get('name')?.value;
    this.phoneNumber = this.myForm!.get('phoneNumber')?.value;

    if (this.myForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mvoekdvr',
        { name: "Bakery", replyto: "antukovan@gmail.com", message: "New order" },
        { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
    }
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

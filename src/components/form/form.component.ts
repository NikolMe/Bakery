import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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

      const currentDate = new Date();

      const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const date = currentDate.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });

      const formattedDateTime = `${time} ${date}`;

      let message = "Користувач " + this.userName + " надіслав(ла) свій номер телефону " + this.phoneNumber + " о " + formattedDateTime;
      this.http.post('https://formspree.io/f/mvoekdvr',
        { name: "Bakery", replyto: "antukovan@gmail.com", message: message },
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

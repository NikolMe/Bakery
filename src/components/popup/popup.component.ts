import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PopupComponent implements OnInit{

  ngOnInit(): void {
    setTimeout(() => {
      this.showIt();
    }, 30000);
  }

  showIt() {
    const element = document.getElementById("hid");
    if (element) {
      element.style.visibility = "visible";
    }
  }

  closePopup(): void {
    const element = document.getElementById("hid");
    if (element) {
      element.style.visibility = "hidden";
    }
  }
}

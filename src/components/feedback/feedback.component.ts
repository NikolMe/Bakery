import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Feedback} from "./feedback";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent implements OnInit {
  feedbackList: Feedback[] = [];
  startIndex = 0;
  lastIndex = 2;

  ngOnInit(): void {
    this.feedbackList.push({
      name: 'Галина Романюк',
      rate: 5,
      feedback: 'Дуже дякуємо за чудовий торт на день народження нашої доньки! Він був надзвичайно смачним, м\'яким і дуже гарно оформленим. Наша донька була в захваті! Обов\'язково замовлятимемо у вас знову!'
    }, {
      name: 'Аліна Гриценко',
      rate: 5,
      feedback: 'Не можу вдатися у день без кави та чудового печива з цієї пекарні! Кожен кусочок - справжня радість для смаку. Їхні випічка завжди вражає своєю якістю та ароматом. Обожнюю це місце всім сердцем.'
    }, {
      name: 'Андрій Стельмах',
      rate: 4,
      feedback: 'Мій улюблений момент тижня - коли я відвідую цю пекарню! Їхні торти - справжні шедеври, а хліб завжди такий свіжий та смачний. Якщо ви шукаєте смаколики на будь-який смак, це місце для вас!'
    });
  }

  ShowNext(): void {
    if (this.startIndex < this.feedbackList.length - 1) {
      this.startIndex++;
    }
  }

  ShowPrevious(): void {
    if (this.startIndex >= 1) {
      this.startIndex--;
    }
  }
}

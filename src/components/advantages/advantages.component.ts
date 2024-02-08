import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvantagesComponent { }

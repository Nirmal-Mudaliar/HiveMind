import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'questions-dashboard',
  templateUrl: './questions-dashboard.component.html',
  styleUrl: './questions-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class QuestionsDashboardComponent {

}

import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/Movie';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() results: Movie[] = [];
}

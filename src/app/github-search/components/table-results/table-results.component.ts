import {Component, Input, OnInit} from '@angular/core';
import {IFindRepositories} from '../../models/FindRepositories';

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.scss']
})
export class TableResultsComponent implements OnInit {
  @Input() repositories: IFindRepositories;

  constructor() { }

  ngOnInit() {
  }

}

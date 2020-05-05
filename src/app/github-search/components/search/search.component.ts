import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {TypesOrder} from '../../models/typesOrder';
import {TypesSort} from '../../models/typesSort';
import {Observable, of} from 'rxjs';
import {IFindRepositories} from '../../models/FindRepositories';
import {catchError, debounceTime, distinctUntilChanged, filter, switchMap, tap} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  repositories$: Observable<IFindRepositories>;
  searchInput: FormControl;
  showLoader = false;

  constructor(private githubService: GithubService) {}


  ngOnInit(): void {
    this.searchInput = new FormControl('', [Validators.required, Validators.minLength(2)]);

    this.repositories$ = this.searchInput.valueChanges.pipe(
      filter(() => this.searchInput.valid),
      distinctUntilChanged(),
      debounceTime(300),
      tap(() => this.showLoader = true),
      switchMap(q => this.githubService.findRepositories({q, order: TypesOrder.desc, sort: TypesSort.stars})),
      tap(() => this.showLoader = false),
      catchError(() => of(null))
    );
  }

}

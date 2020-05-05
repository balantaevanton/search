import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IFindRepositories} from '../models/FindRepositories';
import {Observable} from 'rxjs';
import {IFindRepositoriesQuery} from '../models/FindRepositoriesQuery';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private  httpClient: HttpClient) {
  }

  findRepositories(data: IFindRepositoriesQuery): Observable<IFindRepositories> {
    const params = new HttpParams()
      .set('q', data.q)
      .set('sort', data.sort)
      .set('order', data.order);
    return this.httpClient.get<IFindRepositories>(`${environment.apiURL}/search/repositories`, {params});
  }
}


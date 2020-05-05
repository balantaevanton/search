import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './pages/main/main.component';
import {GithubSearchModuleRouting} from './github-search-module-routing';
import {SearchComponent} from './components/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TableResultsComponent} from './components/table-results/table-results.component';


@NgModule({
    declarations: [MainComponent, SearchComponent, TableResultsComponent],
    imports: [
        CommonModule,
        GithubSearchModuleRouting,
        ReactiveFormsModule,
    ]
})
export class GithubSearchModule {
}

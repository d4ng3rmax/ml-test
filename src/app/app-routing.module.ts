import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{
    path: '',
    component: AppComponent,
    children: [
        {
            path: '',
            component: SearchComponent
        },
        {
            path: 'result',
            component: ResultComponent
        },
        {
            path: 'detail/:id',
            component: DetailsComponent,
            children: [
                {
                    path: 'description',
                    component: DetailsComponent
                }
            ]
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

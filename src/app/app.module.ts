import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { ResultPipe } from './result/result.pipe';
import { CurrentBRPipe } from './result/current-br.pipe';


@NgModule({
    declarations: [
        AppComponent,
        ResultComponent,
        SearchComponent,
        DetailsComponent,
        HeaderComponent,
        ResultPipe,
        CurrentBRPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}

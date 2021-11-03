import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ObservableComponent } from './observable.component';
import { PromiseComponent } from './promise.component';
import { BookData } from './book-data';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(BookData),
  ],
  declarations: [AppComponent, ObservableComponent, PromiseComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewComponentComponent} from './new-component/new-component.component';
import {NewServiceService} from './services/new-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    NewServiceService, {provide: '_count', useValue: 100}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

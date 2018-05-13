import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/form-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PainelComponent } from './painel/painel.component';
import { AcompanhamentoComponent } from './painel/acompanhamento/acompanhamento.component';
import { StopWatchComponent} from './painel/acompanhamento/stopwatch.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PainelComponent,
    AcompanhamentoComponent,
    StopWatchComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

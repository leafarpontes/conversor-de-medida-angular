import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KilometerToMeterPipe, MetroParaCentimetroPipe } from './pipes';
import { MeterToKilometerPipe } from './pipes/meter-to-kilometer.pipe';
import { CentimetroParaMetroPipe } from './pipes/centimetro-para-metro.pipe';
import { CentimetroParaMilimetroPipe } from './pipes/centimetro-para-milimetro.pipe';
import { MilimetroParaCentimetroPipe } from './pipes/milimetro-para-centimetro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KilometerToMeterPipe,
    MetroParaCentimetroPipe,
    MeterToKilometerPipe,
    CentimetroParaMetroPipe,
    CentimetroParaMilimetroPipe,
    MilimetroParaCentimetroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { VertualKeyboardDirective } from './core/vertual-keyboard.directive';
// import { NgxVirtualKeyboardModule }  from 'ngx-virtual-keyboard';

@NgModule({
  declarations: [
    AppComponent,
    VertualKeyboardDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

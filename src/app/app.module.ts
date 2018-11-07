import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { Rangepipe } from './custompipe/rangepipe';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { EmpComponent } from './emp/emp.component';
import { StudentComponent } from './student/student.component';
import { RamComponent } from './ram/ram.component';
import { PipesComponent } from './pipes/pipes.component';
import { BindingComponent } from './binding/binding.component';
import { SaiComponent } from './sai/sai.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { TemplateformComponent } from './templateform/templateform.component';


@NgModule({
  declarations: [
    AppComponent,DemoComponent,Rangepipe, EmpComponent, StudentComponent, RamComponent, PipesComponent, BindingComponent, SaiComponent, CustompipeComponent, TemplateformComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

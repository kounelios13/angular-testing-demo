import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent, MenuBarItem } from './menubar.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MenubarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports: [MenubarComponent]
})
export class MenubarModule { }

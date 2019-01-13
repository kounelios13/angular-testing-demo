import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenubarComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports: [MenubarComponent]
})
export class MenubarModule { }

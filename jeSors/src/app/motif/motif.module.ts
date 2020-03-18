import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotifComponent } from './motif.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MotifComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [MotifComponent],
})
export class MotifModule { }

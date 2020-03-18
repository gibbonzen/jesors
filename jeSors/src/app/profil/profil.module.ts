import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfilComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [ProfilComponent]
})
export class ProfilModule { }

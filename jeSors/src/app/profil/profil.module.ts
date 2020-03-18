import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CanvasComponent } from '../canvas/canvas.component';



@NgModule({
  declarations: [ProfilComponent, CanvasComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [ProfilComponent]
})
export class ProfilModule { }

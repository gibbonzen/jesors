import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AttestationComponent } from './attestation.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule ],
  declarations: [AttestationComponent],
  exports: [ AttestationComponent ]
})
export class AttestationModule { }

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { MotifService } from '../motif.service';

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.scss'],
})
export class AttestationComponent implements OnInit {
  private sexe: number = this.storage.get("sexe", 0)
  prenom: string = this.storage.get("prenom", "")
  nom: string = this.storage.get("nom", "")
  naissance: number = this.storage.get("naissance", 0)
  adresse1: string = this.storage.get("adresse1", "")
  adresse2: string = this.storage.get("adresse2", "")
  code: number = this.storage.get("code", 0)
  ville: string = this.storage.get("ville", "")
  
  choice: number = 0
  today = Date.now()

  constructor(public storage: StorageService,
    public motif: MotifService) { }

  ngOnInit() {}

  genre() {
    return this.storage.get("sexe", 0) == 0 ? "Mme" : "M."
  }

  female() {
    return this.storage.get("sexe", 0) == 0 ? "e" : ""
  }

}

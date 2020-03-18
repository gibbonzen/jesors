import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';

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

  constructor(private storage: StorageService) { }

  ngOnInit() {}

  genre() {
    return this.sexe == 0 ? "Mme" : "M."
  }

  female() {
    return this.sexe == 0 ? "e" : ""
  }

  choosed(n) {
    return n == this.choice ? "choosed" : "not_choosed"
  }

  icon(n) {
    return n == this.choice ? "checkbox" : "square"
  }

  color(n) {
    return n == this.choice ? "primary" : ""
  }

  longAdresse() {
    return this.adresse2 !== undefined && this.adresse2 !== null && this.adresse2 !== ""
  }

}

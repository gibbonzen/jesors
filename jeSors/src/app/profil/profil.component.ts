import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  prenom: string = this.storage.get("prenom", "")
  nom: string = this.storage.get("nom", "")
  sexe: number = this.storage.get("sexe", 0)
  naissance: number = this.storage.get("naissance", 0)
  adresse1: string = this.storage.get("adresse1", "")
  adresse2: string = this.storage.get("adresse2", "")
  code: number = this.storage.get("code", 0)
  ville: string = this.storage.get("ville", "")

  constructor(private storage: StorageService) { }

  ngOnInit() { }

  female() {
    return this.sexe == 0 ? "e" : ""
  }

  getNaissance() {
    return new Date(this.naissance).toUTCString()
  }

  prenomUpdate(p: string) {
    this.prenom = p
    this.save("prenom", this.prenom)
  }
  
  nomUpdate(n: string) {
    this.nom = n
    this.save("nom", this.nom)
  }
  
  sexeUpdate(s: number) {
    this.sexe = s
    this.save("sexe", this.sexe)
  }
  
  naissanceUpdate(n) {
    let d = new Date(n)
    let time = d.getTime()
    this.save("naissance", time)
  }
  
  adresse1Update(a: string) {
    this.adresse1 = a
    this.save("adresse1", this.adresse1)
  }
  
  adresse2Update(a: string) {
    this.adresse2 = a
    this.save("adresse2", this.adresse2)
  }
  
  codeUpdate(c: number) {
    this.code = c
    this.save("code", this.code)
  }
  
  villeUpdate(v: string) {
    this.ville = v
    this.save("ville", this.ville)
  }

  save(item, value) {
    this.storage.put(item, value)
  }

}

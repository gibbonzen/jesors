import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-motif',
  templateUrl: './motif.component.html',
  styleUrls: ['./motif.component.scss'],
})
export class MotifComponent implements OnInit {
  private choice: number = this.storage.get("motif", 1)

  constructor(private storage: StorageService) { }

  ngOnInit() {}

  expand(id) {
    this.choice = id
    this.storage.put("motif", this.choice)
  }

  isExpanded(id) {
    return this.choice === id
  }

  color(id) {
    return this.isExpanded(id) ? "primary" : ""
  }

}

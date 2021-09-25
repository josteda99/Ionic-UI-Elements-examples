import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes = ['Aquamas', 'superman', 'batman', 'worder', 'flash'];
  disable = false;
  constructor() {}

  ngOnInit() {}

  doReorder(event) {
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    console.log(this.personajes);

    event.detail.complete();
  }

  toogle() {
    this.disable = !this.disable;
  }
}

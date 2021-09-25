import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  albumes: any[] = [];
  textoBusqueda = '';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albums) => {
      this.albumes = albums;
    });
  }
  onSearchChange(event) {
    this.textoBusqueda = event.target.value;
  }
}

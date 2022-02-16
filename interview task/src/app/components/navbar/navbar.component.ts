import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  trendingGifs: any;
  gifs: any;
  searchQuery: string;
  notFound = false;

   constructor(private service: GiphyService) { }

  ngOnInit() {
    
  }


  searchGifs() {
    this.service.searchGifs(this.searchQuery);
    this.service.getGifs()
    .subscribe(results => {
      // tslint:disable-next-line: no-string-literal
      console.log(results['data']);
      // tslint:disable-next-line: no-string-literal
      this.gifs = results['data'];
    }, error => {
      alert('not found :( ');
    });
    this.searchQuery = '';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-list';

  movieList = [
    { id:1, title: 'The Godfather I', year: '1972', director: 'Francis Ford Coppola'},
    { id:2, title: 'The Godfather II', year: '1978', director: 'Francis Ford Coppola'},
    { id:3, title: 'The Godfather III', year: '1982', director: 'Francis Ford Coppola'}

  ]
}

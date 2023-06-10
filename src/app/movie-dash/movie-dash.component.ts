import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-dash',
  templateUrl: './movie-dash.component.html',
  styleUrls: ['./movie-dash.component.css']
})
export class MovieDashComponent {
  myFavoriteMovies = [ 'Encanto', 
  'Spider-Man: No Way Home', 
  "Harry Potter and the Sorcerer's Stone" ];


  selectedMovieToWatch(data: string) {
    debugger;
    alert(data);
  }
}

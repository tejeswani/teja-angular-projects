import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observables-exercises';
}
const observable = new Observable(observer => {
  observer.next("hello");
  observer.next("world")
});

observable.subscribe(value => {
  console.log(value);
})

const numbers = of(2, 4, 6)

const mappedNumbers = numbers.pipe(map(value => value * 2));
mappedNumbers.subscribe(value => console.log(value))





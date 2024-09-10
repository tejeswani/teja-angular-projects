import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-observables-example';
  first_subscriber_observable?: number;

  ngOnInit(){
    let observable = new Observable<number>(ele =>
      ele.next(Math.random()))

    //first subscriber
    observable.subscribe(result => {
      this.first_subscriber_observable = result;
      console.log("Result:"+result)
    })

    
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post {
    title: string,
    text: string,
    id?: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    p: Promise<string> = new Promise<string>(resolve => {
        setTimeout(() => {
            resolve('I am the resolve')
        }, 3000)
    })

    stream$: Observable<Date> = new Observable(observer => {
        setInterval(() => {
            observer.next(new Date())
        }, 1000)
    })
}

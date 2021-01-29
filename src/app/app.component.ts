import { Component } from '@angular/core';

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
    posts: Post[] = [
        {title: 'Kiev', text: 'Kiev is the capital of Ukrain', id: 1},
        {title: 'Moscow', text: 'Moscow is the capital of Russia'},
        {title: 'Minsk', text: 'Minsk is the capital of Belarus'},
        {title: 'Warsaw', text: 'Warsaw is the capital of Poland'},
    ]
}

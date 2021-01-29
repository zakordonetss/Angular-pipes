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
    search = ''
    searchField = 'title'

    posts: Post[] = [
        {title: 'Kiev', text: 'I am living in Kiev', id: 1},
        {title: 'Moscow', text: 'Moscow is the largest city in Russia'},
        {title: 'Minsk', text: 'Minsk is the capital of Belarus'},
        {title: 'Wroclaw', text: 'Wroclaw - city of Poland'},
    ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getCategories();
  }

  categories: string[] = [];
  filterWord: string = '';
  results: string[] = [];

  async getCategories() {
    const res = await fetch('http://localhost:4200/api');
    const resJson = await res.json();
    this.categories = resJson;
    this.results = resJson;
    console.log(this.categories)
  }

  filter(): void{
   this.results = this.categories.filter(category => category.match(this.filterWord))
   console.log('run filter')
  }
}

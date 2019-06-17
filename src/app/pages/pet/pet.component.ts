import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pet',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class PetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

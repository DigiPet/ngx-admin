import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {
  province_list=[]
  privince_id=1
  constructor() {
    this.province_list=[{"name":"San Jose", "id":1},{"name":"Alajuela", "id":2},
                    {"name":"Cartago", "id":3},{"name":"Heredia", "id":4},
                    {"name":"Limon", "id":5},{"name":"Guanacaste", "id":6},
                    {"name":"Puntarenas", "id":7}]
   }

  ngOnInit() {
  }

}

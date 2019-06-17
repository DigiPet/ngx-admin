import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-wr-create',
  templateUrl: './wr-create.component.html',
  styleUrls: ['./wr-create.component.scss']
})
export class WrCreateComponent implements OnInit {
  pet_list=[];
  pet={"name":"", "id":0} ;
  duration_list=[];
  duration={"name":"", "value":0} ;
  payment_type={"name":"", "value":0} ;
  payment_type_list=[]
  constructor() {
    this.pet_list=[ {"name":"Neno", "id":1},{"name":"Estrella", "id":2} ]
    this.duration_list=[{"name":"1h 00min", "value":1},{"name":"1h 30min", "value":1.5},{"name":"2h 00min", "value":2},{"name":"2h 30min", "value":2.5}]
   }

  ngOnInit() {
  }

}

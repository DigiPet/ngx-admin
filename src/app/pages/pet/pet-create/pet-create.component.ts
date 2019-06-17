import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {
  size_list=[]
  pet={}
  nombre=""
  descripcion=""
  raza=""
  tamano=""
  edad=0

  constructor() {
    this.size_list=[{"id":1, "name":"S"},{"id":1, "name":"M"},{"id":1, "name":"L"}]
    this.pet={"descripcion": "","edad": 0,"nombre": "","raza": "", "tamano": ""}
   }

  ngOnInit() {
  }

  printPet(){
    console.log("test")
    console.log(this.pet)
    // console.log(this.nombre , this.raza,this.edad, this.tamano), this.descripcion
  }

}

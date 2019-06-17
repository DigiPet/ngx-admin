import { Component } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-client-register',
  templateUrl: './register.component.html',
})
export class NgxClientRegisterComponent extends NbRegisterComponent {
}
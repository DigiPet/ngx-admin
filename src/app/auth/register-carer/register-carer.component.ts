import { Component } from "@angular/core";
import { NbRegisterComponent } from "@nebular/auth";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject
} from "@angular/core";
import { NbAuthService } from "@nebular/auth";
import { Router } from "@angular/router";
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from "@nebular/auth/auth.options";
@Component({
  selector: "ngx-carer-register",
  templateUrl: "./register-carer.component.html"
})
export class NgxCarerRegisterComponent extends NbRegisterComponent {
  province_list = [];

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {
    super(service, options, cd, router);
    this.province_list = [
      { name: "San Jose", id: 1 },
      { name: "Alajuela", id: 2 },
      { name: "Cartago", id: 3 },
      { name: "Heredia", id: 4 },
      { name: "Limon", id: 5 },
      { name: "Guanacaste", id: 6 },
      { name: "Puntarenas", id: 7 }
    ];
  }
}

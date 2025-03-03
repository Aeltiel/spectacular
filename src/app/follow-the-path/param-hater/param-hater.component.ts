import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-param-hater',
  imports: [],
  templateUrl: './param-hater.component.html',
})
export class ParamHaterComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  id = 0;

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']);
  }

  nav(){
    this.router.navigate(['/home']);
  }
}

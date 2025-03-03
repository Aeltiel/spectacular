import { Component, inject, input } from '@angular/core';
import { Advice } from '../core/models/advice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [],
  templateUrl: './advice.component.html',
  styleUrl: './advice.component.scss'
})
export class AdviceComponent {

  advice = input<Advice>();
  private router = inject(Router);

  hateAdvice(){
    this.router.navigate(['/hate', this.advice()!.slip.id]);
  }
}

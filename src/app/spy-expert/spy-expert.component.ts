import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AdviceComponent } from './advice/advice.component';
import { AdvicesService } from './core/services/advices/advices.service';
import { Subscription } from 'rxjs';
import { Advice } from './core/models/advice';

@Component({
  selector: 'app-spy-expert',
  standalone: true,
  imports: [AdviceComponent],
  template: `<h1>{{title}}</h1><app-advice [advice]="advice"></app-advice> <a href="/path">Follow me!</a><nav>`
})
export class SpyExpertComponent implements OnInit, OnDestroy {

  private adviceService = inject(AdvicesService);
  private subscription!: Subscription;
  title = `Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.`;
  advice: Advice = {} as Advice;

  ngOnInit(): void {
    this.subscription = this.adviceService.getAdvice().subscribe((data: Advice) => { this.advice = data});
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

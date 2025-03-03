import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-follow-the-path',
  imports: [RouterModule],
  template: `
      <h1>I'm your guide</h1>
      <nav style="display: flex;flex-direction: column;">
        <a data-testingId="home-link" routerLink="/home">Home</a>
        <a>1 - Basic doesn't need me!</a>
        <p>C.F: Level-up</p>
        <a routerLink="/mock">2 - Let's mock!</a>
        <p>C.F: Spy-expert</p>
        <a [routerLink]="['/hate', 2]">3 - Follow me!</a>
        <p>C.F: Follow-the-path</p>
        <a routerLink="/lost">Nobody will remain</a>
      </nav>
  `
})
export class FollowThePathComponent  {}

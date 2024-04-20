import { Component } from '@angular/core';

@Component({
  selector: 'app-test-view',
  // templateUrl: './test-view.component.html',
  // როცა მოკლე html გვაქვს ვწერთ აქვე
  template: ` <p>test-view works!</p>
    <span>{{ name }}</span>
    <button (click)="changeName()">change name</button>`,
  // styleUrl: './test-view.component.scss',
  styles: `
    span {
      color: red;
    }
  `,
})
export class TestViewComponent {
  public name: string = 'Testview component';
  private nameChanged: boolean = true;
  public changeName(): void {
    this.nameChanged = !this.nameChanged;
    this.name = this.nameChanged ? 'testview component' : 'testview changed';
  }
}

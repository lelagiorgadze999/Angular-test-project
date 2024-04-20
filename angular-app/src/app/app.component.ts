import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // მშობელმა რომ დაინახოს შვილში არსებული ცვლადი
  @ViewChild('loginComponent') logincomp: any;
  // მშობლიდან ჩავაწოდებთ ამათ ლოგინ შვილს, მშობლიდან შვილის გადაცემას ეწოდება property ბაიდინგ, შილიდან მშობელს data ბაიდინგ
  public placeHolders = {
    username: 'username',
    password: 'password',
  };
  public login() {
    console.log('Login');
    console.log(this.logincomp);
  }
  public register() {
    console.log('Register');
  }
  title = 'angular-app';
}

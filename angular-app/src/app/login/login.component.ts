import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // იმპორტში ჩავამატეთ input, ამ input-ის გარეშე მშობელი ვერ ჩააწოდებს მონაცემს შვილს
  // output-ის იმპორტია საჭირო როცა შვილის გაისვრის ივენთს მშობლისთვის
  //მშობელმა რომ შვილს ჩააწოდოს უნდა ეწეროს ასე, თუ ბევრ ცვლადს გადასცემს იმდენ ინფუთს დავწერთ
  @Input() place_holders: any;
  //ივენთ ემიტერი ნიშნავს ივენთის გასროლას, ის თავისით შემოიმპორტდება
  @Output() loginEvent = new EventEmitter();
  @Output() registerEvent = new EventEmitter();

  //მშობელმა იცოდეს რომ შვილს აქვს ეს ფროფერტი:
  public username = 'john';

  // იცავს საიტს რეფრეშისგან ფორმაში ღილაკზე დაჭერისას
  public onSubmit(event: Event) {
    event.preventDefault();
  }
  //ემიტი გაისროლის ივენთს
  public login() {
    this.loginEvent.emit();
  }

  public register() {
    this.registerEvent.emit();
  }
}

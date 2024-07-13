import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: "Danh",
      email: "danh@gmail.com",
      message: "Hello"
    })
    this.insert({
      name: "David",
      email: "danh@gmail.com",
      message: "Hello David"
    })
    this.insert({
      name: "DanteDanh",
      email: "danh@gmail.com",
      message: "Hello Dante"
    })
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}

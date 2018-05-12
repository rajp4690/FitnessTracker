import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  Messages: { Text: string, Type: 'success' | 'danger' | 'primary' | 'dark'}[];

  constructor() {
    this.Messages = [];
   }

}

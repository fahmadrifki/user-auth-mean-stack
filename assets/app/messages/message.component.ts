import { Component } from '@angular/core';
import { Message } from './message';
import {MessageInputComponent} from "./message-input.component";
import {MessageListComponent} from "./message-list.component";

@Component({
    selector: 'my-message',
    template: `
        <my-input></my-input>
        <my-list></my-list>
    `,
    styles: ['.author {display: inline-block; font-style: italic; font-size: 12px; width: 80%;} .config {display: inline-block; font-size: 12px; text-align: right; width: 19%;}'
    ],
    directives: [MessageInputComponent, MessageListComponent]
})

export class MessageComponent {
    message:Message = new Message('The content', null, 'Rifki');
}
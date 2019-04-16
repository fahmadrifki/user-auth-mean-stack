import { Component } from '@angular/core';
import {MessageComponent} from "./messages/message.component";

@Component({
    selector: 'my-app',
    template: `
        <my-message ></my-message>
    `,
    directives: [MessageComponent],
})
export class AppComponent {

}
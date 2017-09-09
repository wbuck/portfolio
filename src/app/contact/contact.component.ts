import { Component } from '@angular/core';
import { Message } from './message';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { MessageService } from './message.service';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    message: Message;

    constructor(private _messageService: MessageService) {
        this.message = new Message('', '', '', '');
    }

    onSubmit(form: FormGroup): void {
        this._messageService.postMessage(this.message);
        this.message = new Message('', '', '', '');
        form.reset();
    }
}

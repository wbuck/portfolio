import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    loaded: Boolean = false;

    ngOnInit(): void {
        setTimeout(() => {
            this.loaded = true;
        }, 300);
    }
}

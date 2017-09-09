import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    menuToggled = false;

    toggleMenu(): void {
        this.menuToggled = !this.menuToggled;
    }
}

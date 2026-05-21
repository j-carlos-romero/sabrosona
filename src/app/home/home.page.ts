import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [IonIcon, IonContent],
})
export class HomePage {
    constructor() { }
}

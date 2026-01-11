import { Component, inject, Input } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [IonButton, IonIcon, CommonModule]
})
export class FooterComponent {

    @Input() showIrInicio: boolean = false;

    private readonly router: Router = inject(Router);

    public goToContactar() {
        this.router.navigate(["/contactar"]);
    }

    public goToInicio() {
        this.router.navigate([""]);
    }

}
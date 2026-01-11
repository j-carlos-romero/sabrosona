import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [IonContent, IonButton, CommonModule, FormsModule, FooterComponent, HeaderComponent]
})
export class HomePage {

    private readonly router: Router = inject(Router);

    public goToCarta(tipo: string) {
        this.router.navigate(["/carta/" + tipo]);
    }

}
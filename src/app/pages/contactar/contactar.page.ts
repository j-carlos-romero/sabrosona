import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButton, IonPopover, IonListHeader, IonGrid, IonRow, IonCol, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { AlergenosService } from 'src/app/services/alergenos.service';

@Component({
    selector: 'app-contactar',
    templateUrl: './contactar.page.html',
    styleUrls: ['./contactar.page.scss'],
    standalone: true,
    imports: [IonContent, IonIcon, IonButton, IonPopover, IonListHeader, IonGrid, IonRow, IonCol, IonLabel, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class ContactarPage {

    private readonly alergenosService: AlergenosService = inject(AlergenosService);

    protected readonly alergenos: string[] = this.alergenosService.alergenos;

    public getAlergeno(alergeno: string) {
        return this.alergenosService.getAlergeno(alergeno);
    }

    public getAlergenoIcon(alergeno: string): string {
        return this.alergenosService.getAlergenoIcon(alergeno);
    }

}

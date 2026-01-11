import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-carta',
    templateUrl: './carta.page.html',
    styleUrls: ['./carta.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, HeaderComponent, FooterComponent, IonButton]
})
export class CartaPage implements OnInit {

    private readonly route: ActivatedRoute = inject(ActivatedRoute);

    public tipo: string | null = null;

    ngOnInit() {
        // Recupera el parámetro de la URL
        this.tipo = this.route.snapshot.paramMap.get('tipo');

        console.log('Tipo de carta:', this.tipo);
        // Aquí podrías usarlo para cargar la sección correspondiente
    }

}

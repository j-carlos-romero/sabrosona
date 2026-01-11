import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonGrid, IonCol, IonRow, IonCardTitle, IonCardSubtitle, IonButtons, IonCardHeader, IonButton, IonPopover, IonTitle, IonToolbar, IonList, IonListHeader, IonLabel, IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/models/producto.model';
import { firstValueFrom } from 'rxjs';
import { AlergenosService } from 'src/app/services/alergenos.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
    imports: [IonContent, IonButtons, IonButton, IonPopover,
        IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
        IonList, IonListHeader, IonLabel, IonCard, IonCardContent,
        IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle,
        IonGrid, IonCol, IonRow]
})
export class MenuPage implements OnInit {

    private readonly http: HttpClient = inject(HttpClient);
    private readonly alergenosService: AlergenosService = inject(AlergenosService);

    public productos: Producto[] = [];
    public tiposProducto: string[] = [];
    protected readonly alergenos: string[] = this.alergenosService.alergenos;

    ngOnInit() {
        this.init();
    }

    public getAlergeno(alergeno: string) {
        return this.alergenosService.getAlergeno(alergeno);
    }

    public getAlergenoIcon(alergeno: string): string {
        return this.alergenosService.getAlergenoIcon(alergeno);
    }

    public getProductosPorTipo(tipo: string) {
        return this.productos.filter(p => p.tipoProducto === tipo);
    }

    private async init() {
        this.productos = await this.loadProducts();
        this.setTipos();
    }

    private async loadProducts(): Promise<Producto[]> {
        const data = await firstValueFrom(
            this.http.get<any[]>(`assets/menu/productos.json?p=${new Date().getTime()}`)
        );
        return data;
    }

    private setTipos() {
        let tiposProducto: string[] = [];
        this.productos.forEach((producto: Producto) => {
            if (producto?.tipoProducto && !tiposProducto.includes(producto.tipoProducto)) {
                tiposProducto.push(producto.tipoProducto)
            }
        })
        this.tiposProducto = tiposProducto;
    }

}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel, IonItem, IonNote } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/models/producto.model';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-carta',
    templateUrl: './carta.page.html',
    styleUrls: ['./carta.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, HeaderComponent, FooterComponent, IonContent,
        CommonModule, FormsModule, IonLabel, IonItem, IonNote]
})
export class CartaPage implements OnInit {

    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    private readonly http: HttpClient = inject(HttpClient);

    public seccion: string | null = null;
    public productos: Producto[] = [];
    public tiposProducto: string[] = [];

    ngOnInit() {
        this.seccion = this.route.snapshot.paramMap.get('seccion');
        this.init();
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
            this.http.get<any[]>(`assets/menu/${this.seccion}.json?p=${new Date().getTime()}`)
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

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlergenosService {

    public readonly alergenos: string[] = ["GLU", "CRU", "HUE", "PES", "CAC", "SOJ", "LEC", "FRU", "APE", "MOS", "SES", "SUL", "ALT", "MOL"];

    public getAlergeno(alergeno: string): string {
        let result: string = '';
        switch (alergeno) {
            case "GLU":
                result = "Gluten";
                break;
            case "CRU":
                result = "Crustáceos";
                break;
            case "HUE":
                result = "Huevos";
                break;
            case "PES":
                result = "Pescado";
                break;
            case "CAC":
                result = "Cacahuetes";
                break;
            case "SOJ":
                result = "Soja";
                break;
            case "LEC":
                result = "Leche";
                break;
            case "FRU":
                result = "Frutos secos";
                break;
            case "APE":
                result = "Apio";
                break;
            case "MOS":
                result = "Mostaza";
                break;
            case "SES":
                result = "Sésamo";
                break;
            case "SUL":
                result = "Sulfitos";
                break;
            case "ALT":
                result = "Altramuces";
                break;
            case "MOL":
                result = "Moluscos";
                break;
        }
        return result;
    }

    public getAlergenoIcon(alergeno: string): string {
        let result: string = '';
        switch (alergeno) {
            case "GLU":
                result = "assets/icon/alergenos/gluten.svg";
                break;
            case "CRU":
                result = "assets/icon/alergenos/crustaceos.svg";
                break;
            case "HUE":
                result = "assets/icon/alergenos/huevos.svg";
                break;
            case "PES":
                result = "assets/icon/alergenos/pescado.svg";
                break;
            case "CAC":
                result = "assets/icon/alergenos/cacahuetes.svg";
                break;
            case "SOJ":
                result = "assets/icon/alergenos/soja.svg";
                break;
            case "LEC":
                result = "assets/icon/alergenos/leche.svg";
                break;
            case "FRU":
                result = "assets/icon/alergenos/frutos_secos.svg";
                break;
            case "APE":
                result = "assets/icon/alergenos/apio.svg";
                break;
            case "MOS":
                result = "assets/icon/alergenos/mostaza.svg";
                break;
            case "SES":
                result = "assets/icon/alergenos/sesamo.svg";
                break;
            case "SUL":
                result = "assets/icon/alergenos/sulfitos.svg";
                break;
            case "ALT":
                result = "assets/icon/alergenos/altramuces.svg";
                break;
            case "MOL":
                result = "assets/icon/alergenos/moluscos.svg";
                break;
        }
        return result;
    }

}

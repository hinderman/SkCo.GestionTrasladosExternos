import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { TbadmFondosPensionesDto } from "./model/tbadmFondosPensionesDto";
import { catchError, map, retry, throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ManagementExternalTransfersService {
    private urlApi: string = '';

    constructor(private http: HttpClient) {      
    }

    getAll(){
        return this.http.get<TbadmFondosPensionesDto>(`${this.urlApi}TbadmFondosPensiones/GetAll`)
        .pipe(
            retry(0), 
            catchError(this.err),
            map((response: TbadmFondosPensionesDto) => {
                return response;
            }))
    }

    err(error: any){
        console.log(error);
        
        return throwError(error);
    }
}
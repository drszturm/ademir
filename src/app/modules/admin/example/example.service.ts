import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ExampleService
{


    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
   
    )
    {
    }



    list(){
        return  this._httpClient.get('https://vmageste.com.br/wp/wp-json/vm/v1/fontes/1');
    }

}

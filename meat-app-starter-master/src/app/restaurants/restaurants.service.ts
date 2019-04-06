import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class RestaurantsService {

  constructor(
    private http: Http
  ) { }

  /**
   * função que pega os dados via http
   * é uma obsevable, passa pelo map para ordenar
   * response joga no response.json
   */
  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
        .catch(ErrorHandler.handleError)
  }

}
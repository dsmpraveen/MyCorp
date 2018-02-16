import {Injectable} from '@angular/core';
import { IOrder } from './order';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderService {

    private _ordersUrl = "http://localhost:3000/getOrders";

    constructor(private _http:Http) {

    }
    getOrders():Observable<IOrder[]> {
        return this._http.get(this._ordersUrl)
        .map((response:Response)=><IOrder[]>response.json())
        .catch(this.handleError)
    }

    private handleError(error:Response) {
        return Observable.throw(error.json().error)
    }
}
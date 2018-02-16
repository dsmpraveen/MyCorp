import {Component,OnInit} from '@angular/core';
import {IOrder} from './order';
import {OrderService} from './order.service';

@Component({
    selector:'orders',
    templateUrl:'./order.component.html',
    styleUrls:['./order.component.css']
})

export class OrderComponent implements OnInit{
    title:string="Orders";
    showImage:boolean = false;

    orders:IOrder[] ;
    errorMessage : string;
    filterText:string;
    activeView:string = 'grid';
    constructor(private _orderService:OrderService) {}

    ngOnInit():void {
        this._orderService.getOrders()
        .subscribe(orders => this.orders = orders,error=>this.errorMessage=<any>error)
    }
    enableView(viewName:string):void {
        this.activeView = viewName;
    }
}


/*
One way
    -Data binding  {{}}
    -Property binding []
    -Event Binding ()
Two Way [()]

*ngIf
*/
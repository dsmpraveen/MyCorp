import {Component,OnInit} from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service';

@Component({
    selector:'products',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
    title:string="Products";
    showImage:boolean = false;
    filterText:string;
    activeView:string = 'grid';
    errorMessage : string;

    products:IProduct[] ;

    constructor(private _productService:ProductService) {      
    }

    ngOnInit():void {
        this._productService.getProducts()
        .subscribe(products => this.products = products,error=>this.errorMessage=<any>error);
    }

    
    toggleImage():void {
        this.showImage = !this.showImage;

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
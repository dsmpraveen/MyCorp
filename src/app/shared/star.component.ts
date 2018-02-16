import {Component,OnChanges,Input,
    Output,EventEmitter} from '@angular/core'

@Component({
    selector:'learn-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    starWidth:number;
    @Input() rating:number;
    @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating*86/5
    }
    onStar():void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`)
    }
}
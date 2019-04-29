import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from './../shared/items.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    providers: [ ItemsService ]
})
export class DetailsComponent implements OnInit {

    itemId : string;
    htmlResult : any;

    constructor(
        private route: ActivatedRoute,
        public itemsService: ItemsService
    ) {
        this.itemId = this.route.snapshot.params['id'];
    }

    public getItem( term : string ) {
        this.itemsService.getItem( term );
    }

    ngOnInit() {
        this.getItem( this.itemId );
    }

}

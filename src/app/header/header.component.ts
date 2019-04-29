import { Component, OnInit, Input } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() searchVal : string;

    constructor( private route: Router ) { }

    ngOnInit() {
    }

    public doSearch =(event, value) : void => {

        this.searchVal = value;
        this.route.navigate(['/result'], { queryParams: { q: encodeURIComponent( this.searchVal ) } });
    }
}

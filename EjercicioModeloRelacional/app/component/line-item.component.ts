import { Component, OnInit } from '@angular/core';
import { LineItem } from '../model/line-item';
import {LineService} from "../service/line-item.service";
import {Router} from "@angular/router";

@Component({
    selector: 'page-line-item',
    templateUrl: 'app/templates/page-line-item.html',
    providers: [LineService]
})

export class LineItemComponent implements OnInit {
    title = 'Pagina Line Item';

    selected: LineItem;

    lines: LineItem[];

    constructor(private router: Router, private lineService: LineService) {

    }

    getLines() {
        this.lineService.getLines().then(lines => this.lines = lines);
    }

    ngOnInit(): void {
        this.getLines();
    }

    onSelect(line: LineItem){
        this.selected = line;
    }

    gotoDetail(): void {
        this.router.navigate(['line/detail/', this.selected.id]);
    }


}

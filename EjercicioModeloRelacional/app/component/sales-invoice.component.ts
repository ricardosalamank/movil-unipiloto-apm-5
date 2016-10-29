import {Component, OnInit} from '@angular/core';
import { LineItem } from '../model/line-item';
import {LineService} from "../service/line-item.service";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
    selector: 'sales-invoice',
    templateUrl: 'app/templates/sales-invoice.html',
    providers: [LineService]
})

export class SalesInvoice implements OnInit {

    lineItem: LineItem;
    constructor(
        private lineService: LineService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.lineService.getLine(id)
                .then(line => this.lineItem = line);
        });
    }
}

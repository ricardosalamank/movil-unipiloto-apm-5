"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var line_item_service_1 = require("../service/line-item.service");
var router_1 = require("@angular/router");
var SalesInvoice = (function () {
    function SalesInvoice(lineService, route) {
        this.lineService = lineService;
        this.route = route;
    }
    SalesInvoice.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.lineService.getLine(id)
                .then(function (line) { return _this.lineItem = line; });
        });
    };
    SalesInvoice = __decorate([
        core_1.Component({
            selector: 'sales-invoice',
            templateUrl: 'app/templates/sales-invoice.html',
            providers: [line_item_service_1.LineService]
        }), 
        __metadata('design:paramtypes', [line_item_service_1.LineService, router_1.ActivatedRoute])
    ], SalesInvoice);
    return SalesInvoice;
}());
exports.SalesInvoice = SalesInvoice;
//# sourceMappingURL=sales-invoice.component.js.map
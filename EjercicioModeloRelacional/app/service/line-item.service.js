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
var core_1 = require("@angular/core");
var line_item_mock_1 = require("../mock/line-item-mock");
var LineService = (function () {
    function LineService() {
    }
    LineService.prototype.getLines = function () {
        return Promise.resolve(line_item_mock_1.LINE);
    };
    LineService.prototype.getLine = function (id) {
        return this.getLines()
            .then(function (lines) { return lines.find(function (line) { return line.id === id; }); });
    };
    LineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LineService);
    return LineService;
}());
exports.LineService = LineService;
//# sourceMappingURL=line-item.service.js.map
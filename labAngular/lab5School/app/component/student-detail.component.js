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
var student_1 = require('../model/student');
var StudentDetailComponent = (function () {
    function StudentDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_1.Student)
    ], StudentDetailComponent.prototype, "student", void 0);
    StudentDetailComponent = __decorate([
        core_1.Component({
            selector: 'student-detail',
            templateUrl: 'app/templates/student-detail.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());
exports.StudentDetailComponent = StudentDetailComponent;
//# sourceMappingURL=student-detail.component.js.map
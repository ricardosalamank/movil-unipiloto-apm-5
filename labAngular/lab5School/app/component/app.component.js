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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "School";
        this.students = STUDENTS;
        this.teachers = TEACHER;
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selected = student;
    };
    AppComponent.prototype.onSelectT = function (teacher) {
        this.selectedT = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/student.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var STUDENTS = [
    {
        id: 1,
        name: "ricardo salamanca",
        classes: ["matematicas", "ingles"],
        grade: "7 semestre"
    },
    {
        id: 2,
        name: "andrea fino",
        classes: ["sistemas", "calculo"],
        grade: "2 semestre"
    },
    {
        id: 3,
        name: "brayan ortiz",
        classes: ["lenguaje", "sociales"],
        grade: "9 semestre"
    }
];
var TEACHER = [
    {
        id: 1,
        name: "ALEJANDRO",
        rooms: ["matematicas", "ingles"],
        studies: ["calculo", "maestria"]
    },
    {
        id: 2,
        name: "carlos",
        rooms: ["historia", "ingles"],
        studies: ["hv", "harvard"]
    },
    {
        id: 3,
        name: "jose",
        rooms: ["lenguaje", "sociales"],
        studies: ["piloto", "nacional"]
    }
];
//# sourceMappingURL=app.component.js.map
import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/student.html'
})
export class AppComponent {

    title: string = "School";

    students: Student[] = STUDENTS;
    selected: Student;

    teachers: Teacher[] = TEACHER;
    selectedT: Teacher;

    onSelect(student: Student) {
        this.selected = student;
    }

    onSelectT(teacher: Teacher){
        this.selectedT = teacher;
    }
}

const STUDENTS: Student[] = [
    {
        id: 1,
        name: "ricardo salamanca",
        classes: ["matematicas","ingles"],
        grade : "7 semestre"
    },
    {
        id: 2,
        name: "andrea fino",
        classes: ["sistemas","calculo"],
        grade : "2 semestre"
    },
    {
        id: 3,
        name: "brayan ortiz",
        classes: ["lenguaje","sociales"],
        grade : "9 semestre"
    }
];

const TEACHER: Teacher[] = [
    {
        id: 1,
        name: "ALEJANDRO",
        rooms: ["matematicas","ingles"],
        studies : ["calculo","maestria"]
    },
    {
        id: 2,
        name: "carlos",
        rooms: ["historia","ingles"],
        studies : ["hv","harvard"]
    },
    {
        id: 3,
        name: "jose",
        rooms: ["lenguaje","sociales"],
        studies : ["piloto","nacional"]
    }
];






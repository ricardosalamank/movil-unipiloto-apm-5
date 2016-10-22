import { Component,Input } from '@angular/core';
import { Student } from '../model/student';

@Component({
    selector: 'student-detail',
    templateUrl: 'app/templates/student-detail.html'
})

export class StudentDetailComponent {
    @Input()
    student: Student;
}
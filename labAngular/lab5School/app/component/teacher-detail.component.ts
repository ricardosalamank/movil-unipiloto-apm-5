import { Component,Input } from '@angular/core';
import { Teacher } from '../model/teacher';

@Component({
    selector: 'teacher-detail',
    templateUrl: 'app/templates/teacher-detail.html'
})

export class TeacherDetailComponent {
    @Input()
    teacher: Teacher;
}
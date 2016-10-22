import { Component,OnInit } from '@angular/core';
import {Student} from '../model/student';
import {StudentService} from '../service/student.service';
import {Teacher} from '../model/teacher';
import {TeacherService} from '../service/teacher.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/product.html',
    providers: [StudentService,TeacherService]
})
export class AppComponent implements OnInit{

    constructor(private studentService: StudentService,
                private teacherService: TeacherService){}

    title: string = "School";

    students: Student[];

    teachers: Teacher[];

    ngOnInit(){
        this.studentService.getStudent()
            .then(students => this.students = students)
            .catch(error => console.log(error))

        this.teacherService.getTeacher()
            .then(teachers => this.teachers = teachers)
            .catch(error => console.log(error))
    }


}



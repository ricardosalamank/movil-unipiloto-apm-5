import {Injectable} from "@angular/core";
import {STUDENTS} from "../mock/student-mock";

@Injectable()
export class StudentService{
    getStudent(){
        return Promise.resolve(STUDENTS);
    }
}
import {Injectable} from "@angular/core";
import {TEACHER} from "../mock/teacher-mock";

@Injectable()
export class TeacherService{
    getTeacher(){
        return Promise.resolve(TEACHER);
    }
}
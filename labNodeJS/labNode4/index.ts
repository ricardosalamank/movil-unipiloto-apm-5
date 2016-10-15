'use strict';   //sentencia para utilizar js de modo estricta mejores practicas
class Person {
    nid: number;
    name: string;
    age: number;

    constructor(nid: number, name: string, age: number){
        this.nid = nid;
        this.name = name;
        this.age = age;
    }

    getNid(){
        return this.nid;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    setNid(nid: number){
        this.nid = nid;
    }
    setName(name: string){
        this.name = name;
    }
    setAge(age: number){
        this.age = age;
    }

}

class Student extends Person{
    id : number;
    classes : Array<string>;
    constructor(){
        super(1,'ricardo',25);
    }

    getId(){
        return this.id
    }
    getClasses(){
        return this.classes
    }
    setId(id:number){
        this.id = id;
    }
    setClasses(classes:Array<string>){
        this.classes = classes;
    }
}

class Teacher extends Person{
    id : number;
    grade : Array<string>;
    classrom : Array<number>;

    constructor(grade:Array<string>,classrom:Array<number>){
        super(1,'alejo',28);
        this.grade = grade;
        this.classrom = classrom;
    }

    getId(){
        return this.id
    }
    getClassrom(){
        return this.classrom
    }
    getGrade(){
        return this.grade
    }
    setId(id:number){
        this.id = id;
    }
    setClassroom(classrom:Array<number>){
        this.classrom = classrom;
    }
    setGrade(grade:Array<string>){
        this.grade = grade;
    }

}

var student = new Student();
var teacher = new Teacher(['uno','dos','tres'],[1,2,3]);

console.log(student);
console.log(teacher);

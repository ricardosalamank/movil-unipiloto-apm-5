'use strict'; //sentencia para utilizar js de modo estricta mejores practicas
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(nid, name, age) {
        this.nid = nid;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getNid = function () {
        return this.nid;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this, 1, 'ricardo', 25);
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(grade, classrom) {
        _super.call(this, 1, 'alejo', 28);
        this.grade = grade;
        this.classrom = classrom;
    }
    Teacher.prototype.getId = function () {
        return this.id;
    };
    Teacher.prototype.getClassrom = function () {
        return this.classrom;
    };
    Teacher.prototype.getGrade = function () {
        return this.grade;
    };
    Teacher.prototype.setId = function (id) {
        this.id = id;
    };
    Teacher.prototype.setClassroom = function (classrom) {
        this.classrom = classrom;
    };
    Teacher.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    return Teacher;
}(Person));
var student = new Student();
var teacher = new Teacher(['uno', 'dos', 'tres'], [1, 2, 3]);
console.log(student);
console.log(teacher);

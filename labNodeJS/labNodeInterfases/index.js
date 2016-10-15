var Student = (function () {
    function Student() {
    }
    Student.prototype.getNid = function () {
        return this.nid;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    ;
    Student.prototype.getAge = function () {
        return this.age;
    };
    ;
    Student.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    return Student;
}());
var Teacher = (function () {
    function Teacher() {
    }
    Teacher.prototype.getNid = function () {
        return this.nid;
    };
    Teacher.prototype.getName = function () {
        return this.name;
    };
    ;
    Teacher.prototype.getAge = function () {
        return this.age;
    };
    ;
    Teacher.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Teacher.prototype.setName = function (name) {
        this.name = name;
    };
    Teacher.prototype.setAge = function (age) {
        this.age = age;
    };
    return Teacher;
}());
var student = new Student();
student.setAge(55);
console.log(student.getAge());

"use strict";
class Student {
    constructor(name) {
        this.courses = [];
        this.balance = 0;
        this.studentID = Student.idCounter++;
        this.name = name;
    }
    enrollCourse(course, tuition) {
        this.courses.push(course);
        this.balance += tuition;
        console.log(`${this.name} enrolled in ${course}.`);
    }
    payTuition(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Payment of $${amount} received from ${this.name}. Remaining balance: $${this.balance}`);
        }
        else {
            console.log(`Insufficient funds. ${this.name}'s balance: $${this.balance}`);
        }
    }
    showStatus() {
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
Student.idCounter = 10000;
// Main program
const students = [];
function addStudent(name) {
    const newStudent = new Student(name);
    students.push(newStudent);
    console.log(`Student ${name} added. Student ID: ${newStudent.studentID}`);
}
function enrollStudent(studentID, course, tuition) {
    const student = students.find((s) => s.studentID === studentID);
    if (student) {
        student.enrollCourse(course, tuition);
    }
    else {
        console.log(`Student with ID ${studentID} not found.`);
    }
}
// Example usage
addStudent("bilal");
addStudent("kashif");
enrollStudent(10000, "Math", 500);
enrollStudent(10001, "Physics", 600);
students[0].payTuition(200);
students[1].payTuition(700);
students[0].showStatus();
students[1].showStatus();

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
    }

    //interface Director extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;    
}
//function printTeacher
function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")); // 

let printTeacher2: printTeacherFunction;
printTeacher2 = function(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
    }
console.log(printTeacher("John", "Doe"));
console.log(printTeacher2("Jane", "Smith"));
const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: false
};
console.log(teacher);
const director: Directors = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    location: "Los Angeles",
    numberOfReports: 5
};
console.log(director);
export { printTeacher, Teacher, Directors, printTeacherFunction };
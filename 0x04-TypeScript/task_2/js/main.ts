// DirectorInterface with expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function that creates an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  let numericSalary: number;

  if (typeof salary === 'string') {
    // Remove non-numeric characters and convert to number
    numericSalary = parseInt(salary.replace(/[^0-9]/g, ''), 10);
  } else {
    numericSalary = salary;
  }

  if (numericSalary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Testing expected result:
console.log(createEmployee(200).constructor.name); // Teacher
console.log(createEmployee(1000).constructor.name); // Director
console.log(createEmployee('$500').constructor.name); // Director

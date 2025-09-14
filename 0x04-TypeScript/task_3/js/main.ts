// 0x04-TypeScript/task_2/js/main.ts

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  // Optional: TypeScript ensures only Math or History is passed
}

// Testing
console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History

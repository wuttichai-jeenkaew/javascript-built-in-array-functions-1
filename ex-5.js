const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  return (
    students.reduce((acc, student) => acc + student.score, 0) / students.length
  );
}

const result = getAverageStudentScore(students);

console.log(result); // Output: 87.5

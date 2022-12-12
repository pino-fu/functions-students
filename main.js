const createStudent = (name1, grade1) => {
    const studentObj = {
        name: name1,
        grade: grade1
    }
    return studentObj
}

const student = createStudent("Jeff", 11)

const addMathGrade = (obj) => {
    obj.math = "B"
    return obj
}

addHistoryGrade = (obj) => {
    obj.history = "C"
    return obj
}

addScienceGrade = (obj) => {
    obj.science = "A"
    return obj
}

addMathGrade(student);
addHistoryGrade(student);
addScienceGrade(student);

console.log(student);
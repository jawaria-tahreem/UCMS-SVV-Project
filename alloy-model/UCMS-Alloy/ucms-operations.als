module operations

sig Student {}

sig Course {}

sig Enrollment {
    student : one Student,
    course : one Course
}

pred EnrollStudent[s : Student, c : Course] {
    some e : Enrollment |
    e.student = s and
    e.course = c
}

pred DropStudent[s : Student, c : Course] {
    no e : Enrollment |
    e.student = s and
    e.course = c
}

run EnrollStudent for 5
run DropStudent for 5

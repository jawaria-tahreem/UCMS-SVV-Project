module signatures

sig Student {}

sig Course {
    capacity : one Int
}

sig Enrollment {
    student : one Student,
    course : one Course
}

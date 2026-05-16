module counterexample

sig Student {}

sig Course {
    capacity : one Int
}

sig Enrollment {
    student : one Student,
    course : one Course
}

fact WrongConstraint {
    all c : Course |
    #(course.c) > c.capacity
}

pred ShowError {}

run ShowError for 5

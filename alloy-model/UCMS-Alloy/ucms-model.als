module ucms_complete

sig Student {}

sig Course {
    capacity : one Int
}

sig Enrollment {
    student : one Student,
    course : one Course
}

fact CapacityLimit {
    all c : Course |
    #(course.c) <= c.capacity
}

fact NoDuplicateEnrollment {
    all disj e1, e2 : Enrollment |
    not (
        e1.student = e2.student and
        e1.course = e2.course
    )
}

fact StudentCourseLimit {
    all s : Student |
    #(s.~student) <= 5
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

pred ShowUCMS {}

run ShowUCMS for exactly 3 Student,
                 exactly 2 Course,
                 exactly 3 Enrollment

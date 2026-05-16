
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddCourse from "./pages/AddCourse";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {

  const [courses, setCourses] = useState([
    {
      title: "Advanced Web Engineering",
      department: "Software Engineering",
      teacher: "Sir Ahmed"
    },
    {
      title: "Artificial Intelligence",
      department: "Computer Science",
      teacher: "Sir Bilal"
    }
  ]);

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
    alert("Course Added Successfully");
  };

  const enrollCourse = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
    alert("Course Enrolled Successfully");
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home courses={courses} enrollCourse={enrollCourse} />} />
        <Route path="/add-course" element={<AddCourse addCourse={addCourse} />} />
        <Route path="/profile" element={<Profile courses={courses} enrolledCourses={enrolledCourses} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

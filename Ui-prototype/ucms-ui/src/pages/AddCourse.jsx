
import { useState } from "react";

function AddCourse({ addCourse }) {

  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [teacher, setTeacher] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !department || !teacher) {
      alert("Please Fill All Fields");
      return;
    }

    addCourse({
      title,
      department,
      teacher
    });

    setTitle("");
    setDepartment("");
    setTeacher("");
  };

  return (
    <div className="form-page">

      <form className="form-box" onSubmit={handleSubmit}>

        <h2>Add Course</h2>

        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Teacher Name"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option>Software Engineering</option>
          <option>Computer Science</option>
          <option>Business</option>
        </select>

        <button type="submit">Add Course</button>

      </form>

    </div>
  );
}

export default AddCourse;

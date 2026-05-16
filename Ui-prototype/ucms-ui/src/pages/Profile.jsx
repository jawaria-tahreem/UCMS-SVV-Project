
function Profile({ courses, enrolledCourses }) {

  return (
    <div className="profile">

      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
        />

        <h1>Jawaria Tahreem</h1>

        <p>jawaria@gmail.com</p>

      </div>

      <div className="section">
        <h2>Courses Added</h2>

        <div className="grid">
          {courses.map((course, index) => (
            <div className="mini-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.department}</p>
              <span>{course.teacher}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Enrolled Courses</h2>

        <div className="grid">
          {enrolledCourses.map((course, index) => (
            <div className="mini-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.department}</p>
              <span>{course.teacher}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Profile;

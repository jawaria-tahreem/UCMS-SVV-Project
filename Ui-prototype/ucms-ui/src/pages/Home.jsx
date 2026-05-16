
function Home({ courses, enrollCourse }) {
  return (
    <div>

      <section className="hero">
        <h1>University Course Management System</h1>
      </section>

      <div className="cards">

        {courses.map((course, index) => (
          <div className="card" key={index}>

            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
              alt="course"
            />

            <div className="content">
              <h2>{course.title}</h2>
              <p>{course.department}</p>
              <span>{course.teacher}</span>

              <button onClick={() => enrollCourse(course)}>
                Enroll Now
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;

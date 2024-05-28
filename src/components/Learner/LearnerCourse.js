import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import '../../Styles/Learnercourse.css';
import { fetchCoursesRequest } from '../../actions/Learner/LearnerGetCourseAction';
import { enrollRequest } from '../../actions/Learner/LearnerPostEnrollAction';

const CourseComponent = ({ enrolledCourses, loading, error, search }) => {
  const courses = useSelector((state) => state.fetchcourse.courses);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCourses(
      courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, courses]);

  const learnerId = 'd7b792f7-9432-4bfa-ad51-33c07a974916'; // Retrieve learner ID from session storage

  const handleEnrollCourse = (courseId) => {
    const maxCourses = 3;
    const learnerCourses = enrolledCourses.filter(course => course.learnerId === learnerId);

    if (learnerCourses.length >= maxCourses) {
      alert('You have reached the course enrollment limit!');
      return;
    }

    const alreadyEnrolled = enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);

    if (alreadyEnrolled) {
      alert('You have already enrolled in this course!');
      return;
    }

    dispatch(enrollRequest(courseId, learnerId));
  };

  const isEnrolled = (courseId) => {
    if (!Array.isArray(enrolledCourses)) {
      console.error("enrolledCourses is not an array", enrolledCourses);
      return false;
    }
    return enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (filteredCourses.length === 0) {
    return <div><h3>No results found.</h3></div>;
  }

  return (
    <div>
      <div className="container-fluid Servicemain">
        <div className="text-center">
          {/* Your other components or content */}
        </div>
        <div className="row">
          {filteredCourses.map((course, index) => (
            <div className="col-sm-4" key={index}>
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <img src={course.thumbnailimage} style={{ width: 100 }} alt={course.title} />
                </div>
                <div className="panel-body">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
                <div className="panel-footer">
                  <p>Advanced Level</p>
                  <h5>{course.duration} months</h5>
                  <button
                    className="btn btn-lg"
                    onClick={() => handleEnrollCourse(course.courseId)}
                    disabled={isEnrolled(course.courseId)} // Disable if already enrolled
                  >
                    {isEnrolled(course.courseId) ? 'Enrolled' : 'Enroll'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrolledCourses.enrolledCourses || [], // Ensure it's an array
  loading: state.enrolledCourses.loading,
  error: state.enrolledCourses.error,
});

export default connect(mapStateToProps)(CourseComponent);
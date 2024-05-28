import React, { useState, useEffect } from 'react';
import Relevantz from '../../assets/Images/Relevantz.png';
import '../../Styles/LearnerNavbar.css';
import LearnerCourse from '../Learner/LearnerCourse';
import { useSelector } from 'react-redux';
//import { fetchCourses } from '../../middleware/CourseApi';
 
function LearnerNavbar() {
  const [search, setSearch] = useState(""); // State for search query
 // const [courses, setCourses] = useState([]); // State for all courses
 const courses = useSelector((state) => state.fetchcourse.courses)
  console.log('navbar page',courses)
  const [suggestions, setSuggestions] = useState([]); // State for filtered suggestions
 
//   useEffect(() => {
//     // Fetch courses once when the component mounts
//     const fetchData = async () => {
//       const coursesData = await fetchCourses();
//       if (coursesData) {
//         setCourses(coursesData);
//       }
//     };
//     fetchData();
//   }, []);
 
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    if (query.length > 0) {
      const filteredSuggestions = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
 
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion.title);
    setSuggestions([]);
  };
 
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Relevantz} alt="Relevantz Logo" /></a>
          <div><h5>Learning Management System</h5></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <form className="d-flex position-relative">
              <div className="input-group search-bar" style={{ width: 400 }}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-light" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              {suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.courseId}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.title}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link icon" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon" href="#">Course</a>
            </li>
          </ul>
          <div className="user-profile">
            <span>Priya</span>
          </div>
        </div>
      </nav>
      <LearnerCourse search={search} />
    </div>
  );
}
 
export default LearnerNavbar; 
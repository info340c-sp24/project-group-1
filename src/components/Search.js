import React, { useEffect, useState } from 'react';
import courseData from '../data/courses.json';
import '../css/project-styling.css';
import '../css/search-page.css';
import { Link } from 'react-router-dom';

const Search = ({ addCourseToPlanner }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    workload: '',
    specialization: '',
    prerequisites: false,
    codingRequired: false,
  });

  useEffect(() => {
    setAllCourses(courseData);
  }, []);

  useEffect(() => {
    const filterCourses = () => { // filters courses 
      const filtered = allCourses.filter((course) => {
        const matchesSearchTerm =
          course.code.toLowerCase().includes(searchTerm.toLowerCase()) || // search query can work with course title OR code
          course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesWorkload = filters.workload ? course.workload.toLowerCase() === filters.workload.toLowerCase() : true;
        const matchesSpecialization = filters.specialization ? course.skills.includes(filters.specialization) : true;
        const matchesPrerequisites = filters.prerequisites ? course.prerequisites[0] !== 'None' : true;
        const matchesCodingRequired = filters.codingRequired ? course.codingRequired : true;

        return (
          matchesSearchTerm &&
          matchesWorkload &&
          matchesSpecialization &&
          matchesPrerequisites &&
          matchesCodingRequired
        );
      });

      setFilteredCourses(filtered);
    };

    filterCourses();
  }, [searchTerm, filters, allCourses]);

  const handleSearchChange = (e) => { // search bar changes
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => { // filter changes
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="flex-container">
      <div className="title">
        <img src="/img/iSchool_logo.png" alt="iSchool logo" height="100px" weight="100px" />
        <h1>Planner</h1>
      </div>
      <div className="search_bar">
        <input
          name="search"
          type="search"
          placeholder="Search for a course to get started"
          id="search_bar"
          onChange={handleSearchChange}
        />
      </div>
      <form className="flex-item" id="course_filter">
        <div className="filter-container">
          <div className="filter-item">
            <label htmlFor="workload_input">Workload</label>
            <select name="workload" id="workload_input" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="Light">Light</option>
              <option value="Medium">Medium</option>
              <option value="Heavy">Heavy</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="specialization_input">Specialization</label>
            <select name="specialization" id="specialization_input" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="Data Science">Data Science</option>
              <option value="Biomedical">Biomedical</option>
            </select>
          </div>
          <div className="filter-item">
            <div className="checkbox-item">
              <label htmlFor="Prerequisites_check">Prerequisites?</label>
              <input
                type="checkbox"
                id="Prerequisites_check"
                name="prerequisites"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="filter-item">
            <div className="checkbox-item">
              <label htmlFor="coding_check">Coding Required?</label>
              <input
                type="checkbox"
                id="coding_check"
                name="codingRequired"
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="course-list">
        {filteredCourses.map((course) => (
          <div key={course.code} className="course-item">
            <h2>{<Link to={`/courses/${course.code}`}>{course.code}</Link>} - {course.title}</h2>
            <p>{course.description}</p>
            <button onClick={() => addCourseToPlanner(course)}>Add to Planner</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

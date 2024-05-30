import React, { useEffect, useState } from "react";
import courseData from "../data/courses.json";
import "../css/project-styling.css";
import "../css/search-page.css";


function Search() {
    const [allCourses, setAllCourses] = useState([]); // contains all courses
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        gpa: "",
        workload: "",
        specialization: "",
        prerequisites: false,
        codingRequired: false
    });

    useEffect(() => {
        setAllCourses(courseData);
    }, []);

    useEffect(() => {
        function filterCourses() {
            const filtered = allCourses.filter((course) => {

                var matchesSearchTerm = false; // ensures search works for both course code and title
                if (course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    matchesSearchTerm= true;
                }
                const matchesWorkload = filters.workload ? course.workload.toLowerCase() === filters.workload.toLowerCase() : true;
                const matchesSpecialization = filters.specialization ? course.skills.includes(filters.specialization) : true;
                const matchesPrerequisites = filters.prerequisites ? course.prerequisites[0] !== "None" : true;
                const matchesCodingRequired = filters.codingRequired ? course.codingRequired : true;

                return matchesSearchTerm && matchesWorkload && matchesSpecialization && matchesPrerequisites && matchesCodingRequired;
            });

            setFilteredCourses(filtered);
        }

        filterCourses();
    }, [searchTerm, filters, allCourses]); // reset on change

    const handleSearchChange = (e) => { // gets new searchTerm
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => { // ngl i do not understand how this works yet
        const { name, value, type, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <div className="flex-container">

            {/* heading and image */}
            <div className="title">
                <img src="/img/iSchool_logo.png" alt="iSchool logo" height="100px" weight="100px" />
                <h1>Planner</h1>
            </div>

            {/* search form */}
            <div className="search_bar">
                <input
                    name="search"
                    type="search"
                    placeholder="Search for a course to get started"
                    id="search_bar"
                    onChange={handleSearchChange}
                />
            </div>

            {/* filtering form */}
            <form className="flex-item" id="course_filter">
                <div className="filter-container">

                    <div className="filter-item">
                        <label htmlFor="GPA_input">Avg. GPA</label>
                        <input
                            name="gpa"
                            type="number"
                            min="0.0"
                            max="4.0"
                            placeholder=""
                            id="GPA_input"
                            onChange={handleFilterChange}
                        />
                    </div>

                    <div className="filter-item">
                        <label htmlFor="workload_input">Workload</label>
                        <select name="workload" id="workload_input" onChange={handleFilterChange}>
                            <option value="Light">Light</option>
                            <option value="Medium">Medium</option>
                            <option value="Heavy">Heavy</option>
                        </select>
                    </div>

                    <div className="filter-item">
                        <label htmlFor="specialization_input">Specialization</label>
                        <select name="specialization" id="specialization_input" onChange={handleFilterChange}>
                            <option value="Data Science">Data Science</option>
                            <option value="Biomedical">Biomedical</option>
                        </select>
                    </div>

                    <div className="filter-item">
                        <div className="checkbox-item">
                            <label htmlFor="Prerequisites_check"> Prerequisites?</label>
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
                            <label htmlFor="coding_check"> Coding Required?</label>
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

            {/* Display filtered courses */}
            <div className="course-list">
                {filteredCourses.map((course) => (
                    <div key={course.code} className="course-item">
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Search;

import React from "react";
import "../css/project-styling.css";
import "../css/search-page.css";

function Search() { 

    return (
        <div className="flex-container">

            {/* {heading and image (need to get them on the same line)} */}
            <div className="title">
                <img src="../../public/img/iSchool_logo.png" alt="iSchool logo" height="100px" weight="100px"/>
                <h1>Planner</h1>
            </div>

            {/* search form */}
            <div className="search_bar">
                <input name="search" type="search" placeholder="Search for a course to get started" id="search_bar"></input>
            </div>
            

            {/* {filtering form} */}
            <form className="flex-item" id="course_filter">
                <div className="filter-container">

                    <div className="filter-item">
                        <label for="GPA_input">Avg. GPA</label>
                        <input name="GPA input" type="number" min="0.0" max="4.0" placeholder="" id="GPA_input"/>
                    </div>

                    <div className="filter-item">
                        <label for="workload_input">Workload</label>
                        <select name="workload" id="workload_input">
                            <option value="Light">Light</option>
                            <option value="Medium">Medium</option>
                            <option value="Heavy">Heavy</option>
                        </select>
                    </div>
                    
                    <div className="filter-item">
                        <label for="specialization_input">Specialization</label>
                        <select name="specialization" id="specialization_input">
                            <option value="Data Science">Data Science</option>
                            <option value="Biomedical">Biomedical</option>
                        </select>
                    </div>

                    <div className="filter-item">
                        <div className="checkbox-item"> 
                            <label for="Prerequisites_check"> Prerequisites?</label>
                            <input type="checkbox" id="Prerequisites_check" name="Prerequisites" value="Prerequisites"/>
                        </div>
                    </div>
                    
                    <div className="filter-item">
                        <div className="checkbox-item"> 
                            <label for="coding_check"> Coding Required?</label>
                            <input type="checkbox" id="coding_check" name="Coding" value="coding"/>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    );
}

export default Search;

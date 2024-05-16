import React from 'react';
import '../css/project-styling.css'; 

function Course({ course }) {
    return (
        <div class="course-container">
            <div class="course-column">
                <h1>{course.code}</h1>
                <h2>{course.title}</h2>
                <h3>{course.description}</h3>
                <ul>
                    {course.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <h4>Prerequisites: {course.prerequisites.join(', ')}</h4>
                <h4>Requirements: {course.requirements}</h4>
                <h4>Workload: {course.workload}</h4>
                <h4>Professors: {course.professors.join(', ')}</h4>
                <img src={course.image} alt="Course" />
                <cite><a href={course.imageSource}>Image Source</a></cite>
            </div>
            
            <div class="course-column">
                <img src={course.graph} alt="course grade distribution"/>
            </div>

        </div>
    );
}

export default Course;
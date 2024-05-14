import React from 'react';
import '../css/project-styling.css';

function Course({ course }) {
    return (
        <div>
            <div>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <ul>
                    {course.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <p>Prerequisites: {course.prerequisites.join(', ')}</p>
                <p>Requirements: {course.requirements}</p>
                <p>Workload: {course.workload}</p>
                <p>Professors: {course.professors.join(', ')}</p>
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
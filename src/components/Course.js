import React from 'react';
import '../css/project-styling.css'; 

function Course({ course }) {
    return (
        <div className="course-container">
            <div className="course-column">
                <h1>{course.code}</h1>
                <h2>{course.title}</h2>
                <h3>{course.description}</h3>
                <ul>
                    {course.skills && course.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                {course.prerequisites && (
                    <h4>Prerequisites: {course.prerequisites.join(', ')}</h4>
                )}
                {course.requirements && (
                    <h4>Requirements: {course.requirements}</h4>
                )}
                {course.workload && (
                    <h4>Workload: {course.workload}</h4>
                )}
                {course.professors && (
                    <h4>Professors: {course.professors.join(', ')}</h4>
                )}
                {course.image && (
                    <>
                        <img src={course.image} alt="Course" />
                        {course.imageSource && (
                            <cite>
                                <a href={course.imageSource} target="_blank" rel="noopener noreferrer">Image Source</a>
                            </cite>
                        )}
                    </>
                )}
            </div>

            <div className="course-column">
                {course.graph && (
                    <img src={course.graph} alt="Course grade distribution" />
                )}
            </div>
        </div>
    );
}

export default Course;
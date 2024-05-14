import React from 'react';
import coursesData from './courses.json'; // Import the course data
import Course from './Course'; // Import the Course component
import '../css/project-styling.css';

function CoursePage({ code }) {
    const course = coursesData.find(course => course.code === code);

    return (
        <div>
            {course && <Course course={course} />}
        </div>
    );
}

export default CoursePage;
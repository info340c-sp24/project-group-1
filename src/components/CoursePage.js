import React from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../data/courses.json';
import Course from './Course';
import '../css/project-styling.css';

function CoursePage() {
    const { code } = useParams();
    const course = coursesData.find(course => course.code === code);

    return (
        <div className="course-page">
            {course ? (
                <Course course={course} />
            ) : (
                <p>Course not found</p>
            )}
        </div>
    );
}

export default CoursePage;
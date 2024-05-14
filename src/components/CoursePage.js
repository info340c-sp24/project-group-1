import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Course from './Course';
import '../css/project-styling.css';


function CoursePage() {
    const { code } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch('../../public/courses.json')
            .then(response => response.json())
            .then(data => {
                const selectedCourse = data.find(course => course.code === code);
                setCourse(selectedCourse);
            });
    }, [code]);

    return (
        <div>
            {course && <Course course={course} />}
        </div>
    );
}

export default CoursePage;
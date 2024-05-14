import React from 'react';

function Planner() {
    return(
        <body>
            <div className="index-container">
                <div className="index-column">
                    <h2>Autumn 2024</h2>
                    <div className="index-box">
                        <h3>CSE 122</h3>
                        <p>Introduction to Computer Programming II</p>
                    </div>
                    <div className="index-box">
                        <h3>INFO 380</h3>
                        <p>Product and Information Systems Management</p>
                    </div>
                    <div className="index-box">
                        <h3>INFO 300</h3>
                        <p>Research Methods</p>
                    </div>
                </div>
                <div className="index-column">
                    <h2>Winter 2025</h2>
                    <div className="index-box">
                        <h3>INFO 330</h3>
                        <p>Databases and Data Modeling</p>
                    </div>
                    <div className="index-box">
                        <h3>CSE 123</h3>
                        <p>Introduction to Computer Programming III</p>
                    </div>
                    <div className="index-box">
                        <h3>INFO 360</h3>
                        <p>Design Methods</p>
                    </div>
                </div>
                <div className="index-column">
                    <h2>Spring 2025</h2>
                    <div className="index-box">
                        <h3>
                            <a href="course-page.html">INFO 340</a>
                        </h3>
                        <p>Client-Side Development</p>
                    </div>
                    <div className="index-box">
                        <h3>INFO 351</h3>
                        <p>Information Ethics and Policy</p>
                    </div>
                    <div className="index-box">
                        <h3>CSE 373</h3>
                        <p>Data Structures and Algorithms</p>
                    </div>
                </div>
            </div>
        </body>
    )
}
import React from 'react'
import CoursesExploreStyle from './CoursesExploreStyle.module.css'
import Course from "./Course";


function CoursesExplore({ courses, title, description }) {

    const courseList = () => {
        return courses.map((course) => <Course key={course.id} course={course} />);
    };


    return (
        <div className={CoursesExploreStyle.coursesExplore}>
            <header className={CoursesExploreStyle.courseExploreHeader}>
                <h2 className={CoursesExploreStyle.title}>{title}</h2>
                <p className={CoursesExploreStyle.description}>{description}</p>
                <button className={`${CoursesExploreStyle.textHeadingSM} ${CoursesExploreStyle.exploreBtn} ${CoursesExploreStyle.bttn}`}> Explore Python</button>
            </header>
            <div className={CoursesExploreStyle.coursesList}>
                {courseList()}
            </div>
        </div>
    )
}

export default CoursesExplore

import React from 'react'
import CoursesExploreStyle from './CoursesExploreStyle.module.css'

function CoursesExplore({ courseList, title, description }) {
    return (
        <div className={CoursesExploreStyle.coursesExplore}>
            <header className={CoursesExploreStyle.courseExploreHeader}>
                <h2 className={CoursesExploreStyle.title}>{title}</h2>
                <p className={CoursesExploreStyle.description}>{description}</p>
                <button className={`${CoursesExploreStyle.textHeadingSM} ${CoursesExploreStyle.exploreBtn} ${CoursesExploreStyle.bttn}`}> Explore Python</button>
            </header>
            <div className={CoursesExploreStyle.coursesList}>
                {courseList}
            </div>
        </div>
    )
}

export default CoursesExplore

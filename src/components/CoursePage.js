import React from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'

function CoursePage({ courses, reviews, contents }) {
    const navigate = useNavigate();
    const { courseURL } = useParams();
    console.log(courseURL);
    const { pathname } = useLocation();
    // console.log(courses);
    console.log(`/course/${courseURL}/`);

    const course = courses ? courses.find(course => course.url === `/course/${courseURL}/`) : [];

    console.log(course);
    const courseId = courses ? course.id : 0;

    // console.log(courseId);
    // const courseReview = reviews.find(review => review.id === courseId);
    // const courseContent = contents.find(content => content.id === courseId);

    return (
        <div>
            HERE
        </div>
    )
}

export default CoursePage

import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CourseReviews from './CourseReviews';


function CoursePage({ courses, reviews, contents }) {
    const navigate = useNavigate();
    const { courseURL } = useParams();
    // const { pathname } = useLocation();

    const course = courses.find(course => course.url === `/course/${courseURL}/`);

    const courseId = parseInt(course.id);

    console.log(courseId);
    const courseReview = reviews.find(review => parseInt(review.id) === courseId);
    const courseContent = contents.find(content => parseInt(content.id) === courseId);

    console.log(courseReview);
    console.log(courseContent);

    return (
        <div>
            <CourseReviews reviews={courseReview} />
        </div>
    )
}

export default CoursePage

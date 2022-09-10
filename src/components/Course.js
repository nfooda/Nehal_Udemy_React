import React from "react";
import { Link } from 'react-router-dom'

import CourseStyle from "./CourseStyle.module.css";
import Rating from "@mui/material/Rating";

function Course({ course }) {
  // const link = course.url;
  const rating = Math.round(course.rating * 10) / 10;

  const Instructors = () => {

    //another way for concatenating array elements 
    return course.visible_instructors.map((instructor) => instructor.display_name).join(", ");

    // let instructors = "";
    // for (let j = 0; j < course.visible_instructors.length - 1; j++) {
    //   instructors += course.visible_instructors[j].display_name;
    //   instructors += ", ";
    // }
    // instructors += course.visible_instructors[course.visible_instructors.length - 1].display_name;
    // return instructors;
  };

  function bestseller() {
    if (course.bestseller_badge_content)
      return <div className={`${CourseStyle.bestseller} ${CourseStyle.textHeadingXS}`}>Bestseller</div>;
    else
      return "";
  }

  return (
    <div className={CourseStyle.course}>
      <Link to={`/course/${course.url.slice(8)}`}>
        <img
          src={course.image_480x270}
          alt={course.title}
          className={CourseStyle.courseImg}
        />
        <h3 className={CourseStyle.textHeadingMD}> {course.title}</h3>
        <p className={`${CourseStyle.instructor} ${CourseStyle.textXS}`}>
          {Instructors()}
        </p>
        <div className={CourseStyle.rate}>
          <span className={`${CourseStyle.rateNo}`}>{rating}</span>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className={CourseStyle.price}>
          <h3
            className={`${CourseStyle.textHeadingMD} ${CourseStyle.price}`}
          >{`${course.price.discount_price.price_string}`}</h3>
          <p className={CourseStyle.textSM}><s>{`${course.price.list_price.price_string}`}</s></p>
        </div>
        {bestseller()}
      </Link>
    </div>
  );
}

export default Course;

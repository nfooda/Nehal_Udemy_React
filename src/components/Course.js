import React from "react";
import CourseStyle from "./CourseStyle.module.css";
import Rating from "@mui/material/Rating";

function Course({ course }) {
  const rating = Math.round(course.rating * 10) / 10;

  const CreateRatingStars = () => {
    //delete since is not used
    let rating_stars = [];
    let full = parseInt(rating);
    let half = rating - full >= 0.4 ? 1 : 0;
    let empty = 5 - full - half;

    for (let i = 0; i < full; i++) {
      rating_stars.push(<i key={i} className="fa fa-star"></i>);
    }

    if (half === 1)
      rating_stars.push(
        <i key={Math.floor(rating)} className="fa fa-star-half-empty"></i>
      );

    for (let i = 0; i < empty; i++) {
      rating_stars.push(<i key={i} className="fa fa-star-o"></i>);
    }

    return rating_stars;
  };

  const Instructors = () => {
    /* 
  ]//another way for concatenating array elements 
   return course.instructors.map((instructor) => instructor.name).join(", ");
   */
    let instructors = "";
    for (let j = 0; j < course.instructors.length - 1; j++) {
      instructors += course.instructors[j].name;
      instructors += ", ";
    }
    instructors += course.instructors[course.instructors.length - 1].name;
    return instructors;
  };

  return (
    <div className={CourseStyle.course}>
      <img
        src={course.image}
        alt={course.title}
        className={CourseStyle.courseImg}
      />
      <h3 className={CourseStyle.textHeadingSM}> {course.title}</h3>
      <p className={`${CourseStyle.instructor} ${CourseStyle.textSM}`}>
        {" "}
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
      <h3
        className={`${CourseStyle.textHeadingSM} ${CourseStyle.price}`}
      >{`E£ ${course.price}`}</h3>
    </div>
  );
}

export default Course;

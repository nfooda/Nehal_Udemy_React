import React, { useState, useEffect } from "react";

function Database() {
  const [course, setCourse] = useState(null);
  const [review, setReview] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {

        setCourse(data.summary[0]);
        setReview(data.review);
        setContent(data.data);

      });
  }, []);

  const header = course ? course.header : "";
  const description = course ? course.description : "";
  const courses = course ? course.items : [];
  const reviews = review ? review : [];
  const contents = content ? content : [];


  return { header, description, courses, reviews, contents };
}

export default Database;

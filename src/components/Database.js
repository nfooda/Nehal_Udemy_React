import React, { useState, useEffect } from "react";
import Course from "./Course";

function Database() {
  const [courses, setCourses] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/python")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
        setTitle(data.header);
        setDescription(data.description);
      });
  }, []);

  let courseList = [];
  courseList = courses
    ? courses.map((course) => <Course key={course.id} course={course} />)
    : [];

  return { courseList, title, description };
}

export default Database;

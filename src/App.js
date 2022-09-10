import React from 'react'

import "./App.css";
import Database from "./components/Database";
import CoursesExplore from "./components/CoursesExplore";
import CoursePage from './components/CoursePage';
import { NavBar } from './components/NavBar';
import Header from './components/Header';
import CoursesHeader from './components/CoursesHeader';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const { header, description, courses, reviews, contents } = Database();
  return (
    <div className="App">
      <NavBar />

      <Routes>

        <Route path="/" element={<Header
          courses={courses}
          title={header}
          description={description}
        />} >

        </Route>
        <Route path='/course/:courseURL' element={<CoursePage
          courses={courses}
          reviews={reviews}
          contents={contents}
        />} />

      </Routes>



    </div>
  );
}

export default App;

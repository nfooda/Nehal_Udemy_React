import React from 'react'

import "./App.css";
import Database from "./components/Database";
import CoursesExplore from "./components/CoursesExplore";
import CoursePage from './components/CoursePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const { header, description, courses, reviews, contents } = Database();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoursesExplore
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
      </BrowserRouter>


    </div>
  );
}

export default App;

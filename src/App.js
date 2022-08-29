import './App.css';
import Database from './components/Database'
import CoursesExplore from './components/CoursesExplore';






function App() {
  console.log(Database())
  const { courseList, title, description } = Database();
  return (
    <div className="App">
      <CoursesExplore courseList={courseList} title={title} description={description} />
    </div>
  );
}

export default App;

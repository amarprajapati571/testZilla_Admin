import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

import Dashboard from './Pages/Dashboard';
import DailyTest from './Pages/DailyTest';
import Exams from './Pages/Exams';
import MockTest from './Pages/MockTest';
import { StaticPages } from './Pages/StaticPages';
import Users from './Pages/Users';
import Subjects from './Pages/Subjects';

import AddDailyTest from './Modules/DailyTest/AddDailyTest';
import EditDailyTest from './Modules/DailyTest/EditDailyTest';
import ImageQuestions from './Modules/DailyTest/ImageQuestions';
import AddExam from './Modules/Exams/AddExam';
import EditExam from './Modules/Exams/EditExam';
import AddMock from './Modules/MockTest/AddMock';
import EditMock from './Modules/MockTest/EditMock';
import ImageQuestionsMock from './Modules/MockTest/ImageQuestionMock';
import AddSubject from './Modules/Subject/AddSubject';
import EditSubject from './Modules/Subject/EditSubject';
import Settings from './Pages/Settings';

import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';



function App() {
  return (
   <> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/exams" element={<Exams/>}/>
          <Route exact path="/daily-test" element={<DailyTest/>}/>
          <Route exact path="/subjects" element={<Subjects/>}/>
          <Route exact path="/mock-test" element={<MockTest/>}/>
          <Route exact path="/static-pages" element={<StaticPages/>}/>
          <Route exact path="/add-dailytest" element={<AddDailyTest/>}/>
          <Route exact path="/edit-dailytest" element={<EditDailyTest/>}/>
          <Route exact path="/daily-imagequestions" element={<ImageQuestions/>}/>
          <Route exact path="/add-exam" element={<AddExam/>}/>
          <Route exact path="/edit-exam" element={<EditExam/>}/>
          <Route exact path="/add-mock" element={<AddMock/>}/>
          <Route exact path="/edit-mock" element={<EditMock/>}/>
          <Route exact path="/mock-imagequestions" element={<ImageQuestionsMock/>}/>
          <Route exact path="/add-subject" element={<AddSubject/>}/>
          <Route exact path="/edit-subject" element={<EditSubject/>}/>
          <Route exact path="/settings" element={<Settings/>}/>

          <Route  path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
   </>
  );
}

export default App;

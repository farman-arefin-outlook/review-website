import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/AboutUs/About';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavbarComp from './components/NavComponet/NavbarComp';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div>
      <NavbarComp />
    </div>
  );
}

export default App;

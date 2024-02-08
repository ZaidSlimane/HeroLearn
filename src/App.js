import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './login.css'
import RegestrationForm from "./components/RegestrationForm";
import LoginPage from "./components/LoginForm";
import HomePage from "./components/HomePage";
import adminDashboard from "./components/admin/AdminDashboard";
import UpdateForm from "./components/admin/UpdateForm";
import UserForm from "./components/admin/UserForm";
import UsersList from "./components/admin/UsersList";
import CourseMaterials from "./components/student/CourseMaterials";
import StudentDashboard from "./components/student/StudentDashboard";


import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import LoginForm from "./components/LoginForm";

function App() {
    return (

        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/admin" component={adminDashboard}/>
                    <Route path="/user-form" component={UserForm} />
                    <Route path="/user/list" component={UsersList}/>
                    <Route path="/user/update" component={UserForm}/>
                    <Route path="/student" component={StudentDashboard}/>
                    <Route path="/student/course/:courseId" component={CourseMaterials}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;

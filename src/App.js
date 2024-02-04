import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import './login.css'
import RegestrationForm from "./components/RegestrationForm";
import LoginPage from "./components/LoginForm";
import HomePage from "./components/HomePage";


import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

function App() {
    return (

        <div>
            <Navbar />
            {/*<RegestrationForm/>*/}
            <HomePage/>
        </div>

    );
}

export default App;

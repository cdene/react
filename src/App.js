import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
    return (

        <div className="App">
            <h1>App page</h1>
            <Router>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                </Switch>
            </Router>
        </div>
    );
}

const Home = () => (
    <div>
        <h1>Home page</h1>
    </div>
);

export default App;

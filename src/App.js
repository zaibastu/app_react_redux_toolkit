import React from 'react';
import Header from './components/molecules/header/header';
import Footer from './components/molecules/footer/footer';
import Registration from './components/organisms/registration_organism/registration_organism';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Trainer from './components/templates/trainer/trainer';
import Home from './components/templates/home_page/home_page';
import Login from './components/organisms/login_organism/login_organism';
import VideoList from './components/atoms/list_video/list_video';
import Corsi from './components/atoms/list_courses/list_courses';
const App = () => {
return (
   <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/trainer" component={Trainer} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/video" component={VideoList}/>
        <Route exact path="/corsi" component={Corsi}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}
export default App;
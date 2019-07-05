import React, {Component} from 'react';
import '../assets/css/App.css'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello'
import MyNavbar from '../components/MyNavbar'
import Login from '../containers/Login'
import Join from '../containers/Join'

class App extends Component{
  
  constructor(props){
    super()
  }

  render(){
    return (  
      <div className='wrapper'> 
        <MyNavbar/>
        <Login/>
        <Join/>>
      </div>
    );
  }
}

export default App;

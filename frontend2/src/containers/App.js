import React, {Component} from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../compo/Hello.js/index.js'
import Navbar from '../compo/MyNavbar.js/index.js'

class App extends Component{
  
  constructor(props){
    super()
  }

  render(){
    return (  
      <div className='wrapper'> 
      테스트
        <Navbar></Navbar>  
        <Hello name='홍길동'></Hello>    
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import '../assets/css/App.css'

import MyNavbar from '../components/MyNavbar'
import Login from '../containers/Login'
import Join from '../containers/Join'
import MyPage from '../containers/MyPage'

class App extends Component{
  
  constructor(props){
    super()
  }

  render(){
    return (  
      <div className='wrapper'> 
        <MyNavbar/>       
      </div>
    );
  }
}

export default App;

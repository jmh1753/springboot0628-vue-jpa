import React, {Component} from 'react';
import '../../assets/css/App.css'

import MyNavbar from '../../components/MyNavbar'
// import Login from '../customer/Login.jsx'
// import Join from '../customer/Join.jsx'
// import MyPage from '../customer/MyPage.jsx'

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

import React, {Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';

class Login extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            customerId : '',
            password : ''
        }
    }

    
   
    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit="{this.login}">
                <Form>
                    <Form.Group controlId="customerId">
                        <Form.Label>Customer ID</Form.Label>
                        {/* <Form.Control type="text" placeholder="Customer ID" /> */}
                        <input type="text" name='customerId' onChange={this.idChange}></input>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        {/* <Form.Control type="password" placeholder="Password" /> */}
                        <input type="text" name='password' onChange={this.pwChange}></input>
                    </Form.Group>
                </Form>
                <input type="submit" value='테스트'></input>
                <Button variant="success" onClick={this.login}>전 송</Button>
                <Button variant="warning">취 소</Button>
                </form>    
            </div>
        );
    }
    idChange = e =>{
        this.setState({customerId: e.target.value})
    }

    pwChange = e => {
        this.setState({password : e.target.value})
    }

    login=e=>{
        e.preventDefault()
        this.setState({submitted: true})
        const { customerId, password } = this.state

        console.log(`customerId is ${customerId}`)
        console.log(`password is ${password}`)
        
        let data = {
            customerId : this.state.customerId,
            password : this.state.password
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization' : 'JWT fefege..'
        }
        alert('로그인 버튼 클릭 !! id:' + data.customerId + ', pass: ' + data.password)
        axios.post('http://localhost:9000/customers/login',
                    JSON.stringify(data),
                    {headers: headers})
            .then(res=>{
                alert('login성공')
            })
            .catch(e=>{
                alert('login실패')
            })
    }

}

export default Login;
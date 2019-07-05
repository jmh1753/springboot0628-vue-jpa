import React, {Component} from 'react'
import {Form,Button} from 'react-bootstrap';

class Join extends Component {
    constructor(props){
        super(props);
        this.state = {
            customerId : '',
            password : '',
            name : '',
            phone : '',
            city : ''
        }
    }

    render(){
        return(
            <div>
                <h2>Join</h2>
                <form onSubmit="{this.handleSubmit}">
                    <Form>                    
                        <Form.Group  controlId="customerId">
                            <Form.Label>CustomerId</Form.Label>
                            <Form.Control type="email" placeholder="customerId" />
                        </Form.Group>

                        <Form.Group  controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password" />
                        </Form.Group>
                        
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="name" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder="phone" />
                        </Form.Group>
                    
                        <Form.Group  controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="city"/>
                        </Form.Group>

                        <Button variant="success">전 송</Button>
                    </Form>
                </form>
            </div>
        );
    }

}

export default Join;
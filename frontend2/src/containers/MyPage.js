import React, {Component} from 'react'
import {Figure, Table} from 'react-bootstrap'
import profileimage from '../../src/assets/images/profileimage.png'

class MyPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }    

    render(){
        return(
            <div>
                <h2>MyPage</h2>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src= {profileimage}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>

                <Table striped bordered hover>
                    
                <tbody>
                    <tr>
                        <td rowSpan="2" colSpan="2"><img src="../../src/assets/images/profileimage.png"></img></td>                       
                        <td>ID</td>
                        <td>jmh1753</td>
                    </tr>
                    <tr>                       
                        <td>NAME</td>
                        <td>홍길동</td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td colSpan="3">01055754786</td>                      
                    </tr>
                    <tr>
                        <td>주소 (도시)</td>                      
                        <td colSpan="3">서울</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        );
    }

}

export default MyPage;
import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super()
        this.state = { 
            seconds : 0
        }
        }

        tick(){
            this.setState(state=>({
                seconds: this.state.seconds + 1
            }))
        }

        componentDidMount(){
            this.interval = setInterval(()=>this.tick(), 1000)
        }

        componentWillUnmount(){
            clearInterval(this.interval);
        }
    
        render(){
            return(
                <div>
                    Second : {this.state.seconds}
                </div>
            );
        }
}

export default Timer;
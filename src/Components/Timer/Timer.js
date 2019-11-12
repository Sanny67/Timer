import React from 'react';
// import './Timer.css';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            timer : '',
            sec : 0,
            isTimerStarted: false
        }
    }
    
    start = () => {

        // if timer is started
        if (this.state.isTimerStarted) {
            return ;
        }

        this.interval = setInterval(() => {
            let time = this.state.sec;
            time++;
            this.setState({sec: time, isTimerStarted: true});
        }, 1000)
    }
    reset = () =>{
        // clear interval
        clearInterval(this.interval);

        // set state sec to = 0
        this.setState({ sec: 0, isTimerStarted: false});

    }

    render(){
        let time = this.state.sec;

        return (
            <div>
                {time}
                <div onClick = {this.start}>Play</div>
                <div onClick = {this.reset}>Reset</div>
            </div>
        );
    }
}
export default Timer;
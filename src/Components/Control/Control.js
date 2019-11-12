import React from 'react';
// import './Display.css';

class Control extends React.Component{
    render(){
        return (
            <div className="controls">
                <button className="play">Play</button>
                <button className="reset">Reset</button>
            </div>
        );
    }
}
export default Control;
import { Component } from "react";
import MoodPoints from '../mood-points/MoodPoints.jsx';
export default class MoodTracker extends Component {
    // create state and set initial state
    // constructor(props) {
    //     //invoke super first - get functionality from Components
    //     super(props) 
    //     this.state = {
    //         points: 11
    //     }
    // }

    // class field declaration method of defining state
    state = {
        points: 11
    }

    // event handlers
    handleIncreaseMood = () => {
        this.setState((prevState) => {
            return {
                points: prevState.points + 1
            }
        })
    }
    handleDecreaseMood = () => {
        this.setState((prevState) => {
            return {
                points: prevState.points - 1
            }
        })
    }
    render () {
        return (
            <div>
                <MoodPoints points={this.state.points} />

                <button onClick={this.handleIncreaseMood}>+</button>
                <button onClick={this.handleDecreaseMood}>-</button>
            </div>
        )
    }
}
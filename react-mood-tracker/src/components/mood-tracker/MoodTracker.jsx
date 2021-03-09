import { Component } from "react";
import MoodPoints from '../mood-points/MoodPoints.jsx';
import MoodNote from '../mood-note/MoodNote.jsx';
import placeHolderNotes from "./placeHolderNotes.js"
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
        points: 11,
        noteInput: '',
        noteData: []
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
    
    handleInputChange = (e) => {
        this.setState({
            noteInput: e.target.value
        }, () => console.log(this.state))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit function')
        this.setState((prevState) => {
            const newNoteData = {
                note: prevState.noteInput,
                date: new Date().toLocaleDateString(),
                points: prevState.points
            }
            return {
                noteData: prevState.noteData.concat([newNoteData])
            }
        })
    }
    render () {
        const noteComponents = this.state.noteData.map((placeHolderNote, index) => {
            return (
                <MoodNote
                    key={`note ${index}`}
                    points={placeHolderNote.points}
                    date={placeHolderNote.date}
                    note={placeHolderNote.note}
                />
            )
        })        
        return (
            <div>
                <MoodPoints points={this.state.points} />

                <button onClick={this.handleIncreaseMood}>+</button>
                <button onClick={this.handleDecreaseMood}>-</button>
                <h3>My Notes:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='note-input'>New Note:</label>
                    <input
                        id='note-input'
                        type='text'
                        placeholder='how ya feelin?'
                        onChange={this.handleInputChange}
                    />
                    <input
                    type='submit'
                    value='Save Note'
                    />
                </form>
                {noteComponents}
            </div>
        )
    }
}
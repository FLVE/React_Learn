import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export class App extends Component {
    constructor(){
        super()
        this.state = {
            counter:20
        }
    }


    changeCounter(count){
        this.setState({counter:this.state.counter+count})
    }

    render() {
        const {counter} = this.state

        return (
            <div>
                当前计数:{counter}
                <AddCounter addClick={(count) => this.changeCounter(count)}/>
                <SubCounter subClick={(count) => this.changeCounter(count)}/>
            </div>
        )
    }
}

export default App
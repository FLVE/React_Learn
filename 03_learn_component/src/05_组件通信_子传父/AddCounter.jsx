import React, { Component } from 'react'

export class AddCounter extends Component {
    addCount(count){
        const click = this.props.addClick
        click(count)
    }
    
    render() {

        return (
        <div>
            <button onClick={e => this.addCount(1)}>+1</button>
            <button onClick={e => this.addCount(5)}>+5</button>
            <button onClick={e => this.addCount(10)}>+10</button>
        </div>
        )
    }
}

export default AddCounter
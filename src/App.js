import React from "react"
import randomcolor from "randomcolor"

//I went for "npm install randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidMount() {
        console.log("Mounted")
        console.log(this.state.color)
        console.log(this.state.count)
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("Did Update")
        console.log(this.state.color)
        console.log(this.state.count)

        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }

    }
    
    render() {
        console.log("Render")
        console.log(this.state.color)
        console.log(this.state.count)
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        )
    }
}

export default App


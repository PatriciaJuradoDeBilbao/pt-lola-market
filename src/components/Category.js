import React, { Component } from 'react'


class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    componentDidMount() {
        
}
    

    render () {
        return (
            <div><h1>{this.props.name}</h1></div>
        )
    }
}

export default Category
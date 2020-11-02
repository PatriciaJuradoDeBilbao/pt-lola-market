import React, { Component } from 'react'
import Category from './Category'

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    displayCategories = () => this.props.categories.map(category => <Category key={category._id} name={category.name} />)
    
    componentDidMount() {
        
    }


    render () {
        return (
            <div><h2>{this.displayCategories()}</h2></div>
        )
    }
}

export default Categories
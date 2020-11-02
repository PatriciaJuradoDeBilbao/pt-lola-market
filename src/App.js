import React from 'react'
import './App.css'
import fetchData from './services/Token.service'
import { Switch, Route, Redirect } from 'react-router-dom'
import Store from './components/Stores'
import fetchCategories from './services/Categories.service'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validToken: '',
    }
  }

  componentDidMount() {
    fetchData()
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.token))
      console.log(token)
      this.setState({
        validToken: token.token,
      })
    })
    //Token y ID a mano
    // fetchCategories("b9097bc679f1a808c62b3c57389f0f26", 53)
    // .then(response => console.log('Categories:', response))

  }

    render () {
      if(this.state.validToken === ''){
        return <h1>Cargando...</h1>
      } else 
      return (
      <>
        <nav>
        {/* <Store /> */}
          <Route path='/' exact render={props => <Store token={this.state.validToken} postalcode={this.state.postalcode} />}/>
        </nav>
       
     </>   
    );
  }
}

export default App;

// 


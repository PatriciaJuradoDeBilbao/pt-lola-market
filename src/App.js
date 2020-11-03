import React from 'react'
import './App.css'
import fetchData from './services/Token.service'
import { Route } from 'react-router-dom'
import Store from './components/Stores/Stores'


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
  }

    render () {
      if(this.state.validToken === ''){
        return <h1>Cargando...</h1>
      } else 
      return (
      <>
        <nav>
          <Route path='/tienda/:market' exact render={props => <Store token={this.state.validToken} postalcode={this.state.postalcode} />}/>
        </nav>
       
     </>   
    );
  }
}

export default App;

// import React, {useState, useEffect} from 'react'
  
// const App = props => {

//   const [data, setData] = React.useState([{validToken: ''}])

//   React.useEffect(() => {
//     fetchData()
//     .then(token => {
//       localStorage.setItem('token', JSON.stringify(token.token))
//       console.log('hooks',token)
//       .then(data => setData(data.validToken))
//     })
//   }, [])

//     return (
//       <>
//         <nav>
//            <Route path='/tienda/:market' exact render={props => <Store token={data.validToken} postalcode={data.postalcode} />}/>
//         </nav>
       
//       </>
//     )

// }

// export default App
 


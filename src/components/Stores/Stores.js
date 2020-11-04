import React from 'react'
import fetchStores from '../../services/Stores.service'
import './Stores.css'
import Categories from '../Categories/CategoriesList'
import fetchCategories from '../../services/Categories.service'


const postalcode = 28010 

class Store extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            companyData: '',
            companyId: '',
            categories: [],
        }
    }

    componentDidMount() {
      const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)
        fetchStores(token, postalcode)
        .then(response => { 
            console.log(response);
            const companyData = response.find(market => market.name === 'Mercadona')
            this.setState({
                companyData: companyData
            })
        this.getCompanyId(token)
        })
    }

    getCompanyId = token => {
        const companyId = this.state.companyData.equivalent_company_id 
        fetchCategories(token, companyId)
        .then(response =>  {
            console.log(response.categories)
            this.setState({
            categories: response.categories
            })
        })
    }

    render() {
        if (this.state.companyData === ''){
            return <div><h1>Cargando..</h1></div>
        } else return (
            <>
                <div className="background" style={{ background: `rgb(${this.state.companyData.color})` }}>
                    <div className="container-info">
                        <div className="icon">
                            <img src={this.state.companyData.icon} alt={this.state.companyData.name} />
                        </div>
                        <div>
                            <h1 className="store-name">{this.state.companyData.name}</h1>
                            <h3 className="store-postalcode">Comprando en {postalcode}</h3>
                        </div>
                    </div>
                    <div className="select-store">
                        <h3>Cambiar</h3>
                    </div>
                </div>
                <div>
                {
                    (this.state.categories.length > 0) ? <Categories store={this.state.companyData.name} categories={this.state.categories}/> : ''

                }
                </div>
            </>
        )
    }
}


export default Store
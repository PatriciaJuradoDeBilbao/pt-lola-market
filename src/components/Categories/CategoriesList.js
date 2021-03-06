import React, { useState } from 'react'
import Category from './Category/Category'
import './CategoriesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { ReactComponent as Select } from '../../assets/ic_checked.svg'
import { Link } from 'react-router-dom'


const Categories = props => {

const star = <FontAwesomeIcon icon={faStar} color="#4FD053" size="lg"/>
const [select, setSelect] = useState('')

const handleSelect = newSelect => {
    setSelect(newSelect)
}

    if(props !== undefined) {

        return (
            <>
                <div className="list-background">
                <Link to={`/tienda/${props.store}/populares`} className="btn" onClick={() => setSelect('')} >
                    <div className="popular-container">
                        <div className="popular-info" >
                            <div className="star-icon">
                                {star}
                            </div>
                            <div>
                                <h2 className="category-popular">Populares</h2>
                            </div>
                        </div>
                        <div className="select-icon-container">
                            {select === '' ? (<Select className="select-icon" />) : ''}
                        </div>
                    </div>
                </Link>
                    <h2 className="category-name">
                        {props.categories.map(category => 
                            <Category 
                                key={category.id}
                                name={category.name}
                                categories={category.categories}
                                store={props.store} 
                                show={select === category.name}
                                onClick={handleSelect}
                                />
                        )}
                    </h2>
                </div>
            </>
        )
    }
}

export default Categories
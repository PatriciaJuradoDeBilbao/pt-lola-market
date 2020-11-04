import React from 'react'
import Category from './Category/Category'
import './CategoriesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { ReactComponent as Select } from '../../assets/ic_checked.svg'
import { Link } from 'react-router-dom'

const Categories = props => {

const star = <FontAwesomeIcon icon={faStar} color="#4FD053" size="lg"/>

    if(props !== undefined) {

        return (
            <>
                <Link to={`/tienda/${props.store}/populares`} className="btn">
                    <div className="popular-container">
                        <div className="popular-info">
                            <div className="star-icon">
                                {star}
                            </div>
                            <div>
                                <h2 className="category-popular">Populares</h2>
                            </div>
                        </div>
                        <div className="select-icon-container">
                            <Select className="select-icon" />
                        </div>
                    </div>
                </Link>
                <div className="list-background">
                    <h2 className="category-name">
                        {props.categories.map(category => 
                            <Category 
                                key={category.id}
                                name={category.name}
                                categories={category.categories}
                                store={props.store} />
                        )}
                    </h2>
                </div>
            </>
        )
    }
}

export default Categories
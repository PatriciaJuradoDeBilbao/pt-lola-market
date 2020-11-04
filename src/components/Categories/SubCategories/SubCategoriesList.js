import React from 'react'
import './SubCategoriesList.css'
import { Link } from 'react-router-dom'


const SubCategoriesList = props => {
    
    return (
        <>
            <Link to={`/tienda/${props.store}/${props.category}/${props.name}`} className="subcategory-name-link">
                <div className="container-subcategory">
                    <h3 className="subcategory-name">{props.name}</h3>
                </div>
            </Link>
        </>
    )
}

export default SubCategoriesList
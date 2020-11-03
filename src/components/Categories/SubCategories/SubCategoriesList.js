import React from 'react'
import './SubCategoriesList.css'


const SubCategoriesList = props => {
    return (
        <>
            <div className="container-subcategory">
                <h3 className="subcategory-name">{props.name}</h3>
            </div>
        </>
    )
}

export default SubCategoriesList
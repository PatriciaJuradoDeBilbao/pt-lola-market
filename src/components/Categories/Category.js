import React from 'react'
import SubCategoriesList from './SubCategories/SubCategoriesList'
import './Category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { ReactComponent as Hide } from '../../assets/ic_hide.svg'


const Category = props => {

    const star = <FontAwesomeIcon icon={faStar} color="#4FD053" size="1x" />
    
    return  (
        <>
            <div className="category-info">
                    {star}
                    <h2>{props.name}</h2>
                    <Hide className="hide-icon"/>
            </div>

                    <div className="categories">
                        <h3 className="all-section">Ver toda la sección</h3>
                    </div>
                    {props.categories.map(subcategories => <SubCategoriesList key={subcategories.id} name={subcategories.name}/>)}
        </>
    )
}

export default Category
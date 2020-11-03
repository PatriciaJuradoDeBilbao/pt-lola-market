import React, { useState } from 'react'
import SubCategoriesList from './SubCategories/SubCategoriesList'
import './Category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { ReactComponent as Hide } from '../../assets/ic_hide.svg'


const Category = props => {

    const star = <FontAwesomeIcon icon={faStar} color="#4FD053" size="lg" />

    const [show, setShow] = useState(false)

    return  (
        <>
            <div className="all">
                <div className="category-container">
                    <button onClick={() => setShow(!show)}>
                        <div className="category-info">
                                <div className="star-icon">
                                    {star}
                                </div>
                                <div>
                                    <h2 className="category-name">{props.name}{show}</h2>
                                </div>
                        </div>
                        <div className="hide-icon-container">
                            {show ? (<Hide/>) : (<Hide className="hide-icon"/>)}
                        </div>
                    </button>
                </div>
                {show 
                ? 
                (<div> 
                    <div className="categories">
                        <h3 className="all-section">Ver toda la sección</h3>
                    </div>    
                    <div className="subcategories-container">
                        {props.categories.map(subcategories => <SubCategoriesList key={subcategories.id} name={subcategories.name} />)}
                    </div> 
                </div>) 
                : 
                ('')
                }
  
            </div>
        </>
    )
}

export default Category
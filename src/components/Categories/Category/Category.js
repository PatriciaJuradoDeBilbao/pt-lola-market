import React, { useState } from 'react'
import './Category.css'
import SubCategory from '../SubCategories/SubCategory'
import { ReactComponent as Hide } from '../../../assets/ic_hide.svg'
import { ReactComponent as Select } from '../../../assets/ic_checked.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'


const Category = props => {

    const star = <FontAwesomeIcon icon={faStar} color="#4FD053" size="sm"/>
    
    const [show, setShow] = useState(false)
    const [showCheck, setShowCheck] = useState(true)

    return  (
        <>
            <div className="all">
                <div className="category-container">
                    <Link to={`/tienda/${props.store}/${props.name}`} className="button" onClick={() => setShow(!show)}>
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
                    </Link>
                </div>
                {show 
                ? 
                ( <div>
                    <div className="categories" onClick={() => setShowCheck(!showCheck)}>
                        <Link to={`/tienda/${props.store}/${props.name}`} className="all-section-link"  >
                            <h3 className="all-section">Ver toda la sección{showCheck}</h3>
                        </Link>
                        <div className="select-icon-container">
                            {showCheck ? '' : (<Select className="select-icon" />)}
                        </div>
                    </div>    
                    <div className="subcategories-container">
                        {props.categories.map(subcategories => 
                            <SubCategory 
                                key={subcategories.id} 
                                category={props.name}
                                name={subcategories.name}
                                store={props.store}
                            />
                        )}
                    </div> 
                </div> ) 
                : 
                ('') }
            </div>
        </>
    )
}

export default Category
import React, { useState } from 'react'
import './SubCategory.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Select } from '../../../assets/ic_checked.svg'


const SubCategory = props => {
    
    const [show, setShow] = useState(true)

    return (
        <>
            <Link to={`/tienda/${props.store}/${props.category}/${props.name}`} className="subcategory-name-link" onClick={() => setShow(!show)}>
                <div className="container-subcategory">
                    <div className="subcategory-name">
                        <h3>{props.name}{show}</h3>
                    </div>
                    <div className="select-icon-container">
                            {show ? '' : (<Select className="select-icon-hidden"/>)}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SubCategory
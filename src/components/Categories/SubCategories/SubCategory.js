import React from 'react'
import './SubCategory.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Select } from '../../../assets/ic_checked.svg'


const SubCategory = props => {

    const handleSelect = select => {
        props.onClick(select)
    }

    return (
        <>
        {
            (handleSelect) ?

            <Link to={`/tienda/${props.store}/${props.category}/${props.name}`} className="subcategory-name-link" onClick={() => handleSelect(props.name)}>
                <div className="container-subcategory">
                    <div className="subcategory-name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="select-icon-container">
                    {props.select ? (<Select className="select-icon-hidden"/>) : ''}
                    </div>
                </div>
            </Link>
            : null
        }
        </>
    )
}

export default SubCategory
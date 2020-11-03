import React from 'react'
import Category from './Category'
import './CategoriesList.css'


const Categories = props => {

    if(props !== undefined) {
        return (
            <>
                <div className="list-background">
                    <h2 className="category-name">
                        {props.categories.map(category => 
                            <Category 
                                key={category.id}
                                name={category.name}
                                categories={category.categories} />
                        )}
                    </h2>
                </div>
            </>
        )
    }
}

export default Categories
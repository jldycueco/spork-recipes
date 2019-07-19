import React from 'react'
import './Recipe.css'
import {Link} from 'react-router-dom'

const RecipeContainer = ({recipe}) => {
    return (
        <div className = "recipe-item">
            <Link to={{
                pathname: `/view/${recipe.recipe_id}`,
                state: {recipe: recipe}
            }} >
                <img 
                    src = {recipe.image_url}
                    alt = {recipe.image_url}
                />
                <div>{recipe.title}</div>
            </Link> 
        </div>
    )
}

export default RecipeContainer
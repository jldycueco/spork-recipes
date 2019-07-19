import React, {Fragment} from 'react'
import UseFetch from './useFetch';
import ErrorPage from './ErrorPage'
import './RecipeDetail.css'
import PageSpinner from './PageSpinner'

const API_key = process.env.REACT_APP_API_KEY

const RecipeDetail = (props) =>{
    const recipeState = props.location.state.recipe
    console.log(recipeState)

    const [{fetchedData, isError, isLoading }] = UseFetch(
        [], `https://www.food2fork.com/api/get?key=${API_key}&rId=${recipeState.recipe_id}`
    )

    const content = () => {
        const {recipe} = fetchedData
        if (typeof recipe !== 'undefined'){
            return recipe.ingredients
        } else {
            return []
        }
    }
    const array = content()

    return (
        <Fragment>
            { isError && <ErrorPage />}
            {isLoading ? (<div><PageSpinner /></div>): (
                <div className = 'recipeDetail-container'>
                    <div className = 'recipeDetail-img-container'>
                        <h1>{recipeState.title}</h1>
                        <img 
                            src = {recipeState.image_url}
                            alt = {recipeState.image_url}
                        /> 
                        <h3>
                            <i className="fas fa-user"></i> 
                            <a 
                                href = {recipeState.publisher_url}
                                target = '_blank'
                                rel = 'noreferrer noopener'
                            >
                                {recipeState.publisher}
                            </a>
                        </h3>
                        <h4>
                            <a 
                                href = {recipeState.source_url}
                                target = '_blank'
                                rel = 'noreferrer noopener'
                            >
                                View Instructions at {recipeState.publisher}
                            </a>
                        </h4>

                    </div>
                    <div className = 'recipeDetail-ingredient-container'> 
                        <h3>Ingredients:</h3>
                        <ul>
                            {array.map((ingredient, index) => 
                                <li key = {index}>{ingredient}</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default RecipeDetail



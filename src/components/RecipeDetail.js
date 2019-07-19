import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import ErrorPage from './ErrorPage'
import './RecipeDetail.css'
import PageSpinner from './PageSpinner'

const API_key = process.env.REACT_APP_API_KEY

const RecipeDetail = (props) =>{
    console.log(props)
    const [data, setData] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [ingredients, setIngredients] = useState([])
    
    useEffect(()=>{
        if(typeof props.location.state === 'undefined'){
            console.log('error')
            setIsError(true)
        } else {
            const getData = async () => {
                setIsError(false)
                setIsLoading(true)
                try {
                    const result = await axios(`https://www.food2fork.com/api/get?key=${API_key}&rId=${props.location.state.recipe.recipe_id}`)
                        if(result.data.error){
                            setIsError(true)
                        } else {
                            console.log(result)
                            setData(result.data.recipe)
                            setIngredients(result.data.recipe.ingredients)
                        }
                } catch (err){
                    setIsError(true)
                }
                setIsLoading(false)
            }
            getData();
        }
    },[props])

    return (
        <Fragment>
            { isError ? <ErrorPage /> :
                isLoading ? (<div><PageSpinner /></div>): ( 
                    <div className = 'recipeDetail-container'>
                        <div className = 'recipeDetail-img-container'>
                            <h1>{data.title}</h1>
                            <img 
                                src = {data.image_url}
                                alt = {data.image_url}
                            /> 
                            <h3>
                                <i className="fas fa-user"></i> 
                                <a 
                                    href = {data.publisher_url}
                                    target = '_blank'
                                    rel = 'noreferrer noopener'
                                >
                                    {data.publisher}
                                </a>
                            </h3>
                            <h4>
                                <a 
                                    href = {data.source_url}
                                    target = '_blank'
                                    rel = 'noreferrer noopener'
                                >
                                    View Instructions at {data.publisher}
                                </a>
                            </h4>

                        </div>
                        <div className = 'recipeDetail-ingredient-container'> 
                            <h3>Ingredients:</h3>
                            <ul>
                                {ingredients.map((ingredient, index) => 
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



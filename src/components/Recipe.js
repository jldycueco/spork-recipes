import React, {Fragment, useState} from 'react'
import UseFetch from './useFetch';
import RecipeContainer from './RecipeContainer'
import ErrorPage from './ErrorPage'
import PageSpinner from './PageSpinner'
import './Recipe.css'

const API_key = process.env.REACT_APP_API_KEY

const Recipe = () =>{
    const [selectOption, setSelectOption] = useState('Top Rated')
    const [query, setQuery] = useState('')
    const [{fetchedData, isLoading, isError}, setUrl] = UseFetch(
        {recipes: []}, `https://www.food2fork.com/api/search?key=${API_key}&q=""&page=1`
    )
    
    const updateQuery = (event) =>{
        setQuery(event.target.value)
    }

    const handleChange = (event) => {
        setSelectOption(event.target.value)
        if(selectOption === "Trending"){
            setUrl(`https://www.food2fork.com/api/search?key=${API_key}&sort=t&page=1`)
            console.log('fetched data for trending')
        } else {
            setUrl(`https://www.food2fork.com/api/search?key=${API_key}&sort=r&page=1`)
            console.log('fetched data for Top Rated')
        }
    }

    const updateUrl = (event) => {
        event.preventDefault()
        setUrl(`https://www.food2fork.com/api/search?key=${API_key}&q=${query}&page=1`)
        setQuery('')
    }

    return (
        <Fragment>
            <ul className = 'form-container'>
                <li>
                    <form onSubmit = {updateUrl}>
                        <input 
                            type = "text" 
                            name = "search-bar" 
                            placeholder = "Search ingredients, recipes" 
                            value = {query}
                            onChange = {updateQuery}
                        />
                        <button
                            name = "search-button"
                            type = "submit"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </li>
                
                <li>
                    <form>
                        <label>
                        SORT BY >
                        <select value={selectOption} onChange={handleChange}>
                            <option value="Top Rated">Top Rated</option>
                            <option value="Trending">Trending</option>
                        </select>
                        </label>
                    </form>
                </li>
            </ul>

            <div>
                {isError && <ErrorPage />}
                {isLoading ? (<div><PageSpinner /></div>): (<div className = "recipe-container">
                    {fetchedData.recipes.map(recipe => <RecipeContainer key = {recipe.recipe_id} recipe = {recipe} />)}
                </div>)}
            </div>
        </Fragment> 
    )
}
export default Recipe
import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Recipe from './Recipe'
import RecipeDetail from './RecipeDetail'
import ErrorPage from './ErrorPage'

const AppRouter = () => {   
    return(
        <Fragment>
            <Switch>
                <Route path = "/" exact component = {Recipe}/>
                <Route path = "/view/:id" component = {RecipeDetail} />
                <Route component={ErrorPage} />
            </Switch>
        </Fragment>
    )
}

export default AppRouter
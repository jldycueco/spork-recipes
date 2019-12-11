import React from 'react';
import Nav from './components/Navbar/';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SearchContextProvider from './context/SearchContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import RecipeLayout from './components/Recipe/Layout';
import SpecificRecipe from './components/Recipe/SpecificRecipe';
import RandomRecipe from './components/Recipe/RandomRecipe';
import CategoryRecipe from './components/Recipe/CategoryRecipe';
import Footer from './components/Footer';
import SearchRecipe from './components/Recipe/SearchRecipe';

library.add(fab, faSearch, faExternalLinkAlt);

function App() {
  return (
    <SearchContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={RecipeLayout} />
          <Route path="/random" exact component={RandomRecipe} />
          <Route
            path="/recipe/:id"
            exact
            component={SpecificRecipe}
          />
          <Route
            path="/category/:category"
            exact
            component={CategoryRecipe}
          />
          <Route path="/query" exact component={SearchRecipe} />
          {/* <Route component={ErrorPage} /> */}
        </Switch>
        <Footer />
      </Router>
    </SearchContextProvider>
  );
}

export default App;

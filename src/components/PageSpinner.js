import React from 'react'
import Loader from 'react-loader-spinner'
import './PageSpinner.css'

export default function PageSpinner(){
    return(
        <div className = "pageSpinner">
            <Loader
                type="Oval"
                color="Black"
                height="100"	
                width="100"
            />   
        </div>
       );
}
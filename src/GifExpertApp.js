import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//create a variable named GifExpertApp and then export the component
export const GifExpertApp = () =>{
    //const categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['asuka']);

    //use JSX 
    return(
        <>
            <h2>GifExpertApp</h2>
            <h5>Add some key in order to find...</h5>
            <AddCategory setCategories = { setCategories }/>
            <hr />
            <ol>
              { 
                categories.map( category => (
                    <GifGrid key = { category } 
                             category = { category } 
                    />
                ))
              }
            </ol>
        </>
      
    )
};


import React, { useState, useEffect } from 'react';
import { GifItem } from './GifItem';

export const GifGrid = ({ category })=>{

    const [images, setImages] = useState([]);

    //avoid the render on a function
    useEffect(() => {
         getGifs();
    }, [category]);

    //request from api gifphy developer
    const getGifs = async () =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=7EBM9tFHgaBZnIOuxNO2duplpMEYWbhs`;
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map(img => {
            return { 
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gifs);

       
    }

    return(
        <>
            <h3> { category } </h3>
            <div className='card-grid'>
            
            {
                    images.map( image =>(
                        <GifItem key = { image.id } 
                                { ...image } />
                    ))
            }
            
            </div>
        </>
    );
}
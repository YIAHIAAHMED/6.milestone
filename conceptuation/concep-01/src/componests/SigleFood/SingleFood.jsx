import React from 'react';
import './SingleFood.css'

const SingleFood = ({meal}) => {
    return (
        <div className='card'>
            <img src={meal.strMealThumb} />
            <h1>{meal.strMeal}</h1>
            <button>Add to Cart</button>
        </div>
    );
};

export default SingleFood;
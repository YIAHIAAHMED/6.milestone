import React, { use } from 'react';
import SingleFood from '../SigleFood/SingleFood';

const FoodSection = ({foodDatares}) => {
    // console.log(foodDatares)
    const {meals} = use(foodDatares)
    console.log(meals)
    
    return (
        <div className='foods-container'>
            {
                meals.map(meal => <SingleFood meal ={meal} ></SingleFood>)
            }
        </div>
    );
};

export default FoodSection;
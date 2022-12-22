 import React from 'react';

const Categories = ({categories, filterItems}) => {
  return(
    <div className="btn-container">
      {categories.map((category, indx)=>{
        return(
          <button type='button' className='filter-btn' key={indx} onClick={()=>filterItems(category)}>
            {category}
          </button>
        ) 
      })}
    </div>
  ) 
};

export default Categories;

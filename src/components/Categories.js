import React from 'react'

export default function Categories(props) {
  return (
    <div className='container cat'>
        {props.categories.map((category,index)=>{
            return (
                <button type="button" key={index} className={props.activeCategory === category?'btnMenuOptions active1':'btnMenuOptions'} onClick={()=>{props.filterItems(category)}}>{category}</button>
            )
        })}
    </div>
  )
}

import React from 'react'

function Product(props){

    return(
        <div>
            <span>{props.name}  </span>
            <span>{props.brand}  </span>
            <span>{props.price}  </span>
            <span>{props.colors}  </span>
           
        </div>
    )
}

export default Product
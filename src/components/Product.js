import React from 'react'
 
function Product(props){

    return(
        <div className="product">
            <span className="name">Name: {props.name}  </span>
            <span className="brand">Brand: {props.brand}  </span>
            <span className="price">Price: {props.price}  </span>
            <span className="colors">
               <span>Colors: </span>
               <span className="colors__names">
                   {props.colors.map(color => <div key={color}>{color}</div>)}
               </span>  
            </span>
           
        </div>
    )
}

export default Product
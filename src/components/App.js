import React,{useState} from 'react'
import Product from './Product'
import data from '../data.json'
// import data2 from '../data2.json'

function App(){
    const [colors,setColors]= useState('')
    const [price,setPrice]= useState({from:0,to:10000})
    const [brands,setBrands]= useState('')
    let products

    function showData(){
        const filteredData= data.filter(
            product =>  {
                let b=brands.length>0?brands.match(product.brand):true  
                let p=price.from <= product.price && price.to >= product.price 
                let c=colors.length>0?product.colors.filter(color => colors.match(color)).length :true
                return b && p && c
                }
            )
            console.log(filteredData)
            
        
        products= filteredData.map(item => (
            <Product name={item.name}
                     price={item.price}
                     brand={item.brand}
                     colors={item.colors}
                     key={item.name} />
        ))
    }

    showData()

    function brandCheck(event){
        const {value}= event.target
        var re = new RegExp(value,"g");
        // console.log(value)

        if(event.target.checked)
            setBrands(prevBrands => prevBrands+value)

        else if(!event.target.checked){
            setBrands(prevBrands => prevBrands.replace(re,''))
        }
    } 

    function colorCheck(event){
        const {value}= event.target
        var re = new RegExp(value,"g");
        // console.log(value)

        if(event.target.checked)
            setColors(prevColors => prevColors+value)

        else if(!event.target.checked){
           setColors(prevColors => prevColors.replace(re,''))
        }

    } 

    function handleChange(event){
        const {name,value}= event.target
        setPrice(prevPrice => ({...prevPrice,[name]:value}))

    }

    return(
        <div>
            <div>
                <h2>Filters</h2>
                <h3>Brands:</h3>
                <ul>
                    <li> <input type="checkbox" value="nike"  id="nike" onClick={brandCheck} />         <label htmlFor="nike">Nike</label> </li>
                    <li> <input type="checkbox" value="adidas" id="adidas" onClick={brandCheck} />     <label htmlFor="adidas">Adidas</label> </li>
                    <li> <input type="checkbox" value="puma"  id="puma" onClick={brandCheck} />         <label htmlFor="puma">Puma</label> </li>
                </ul>
                <h3>Colors:</h3>
                <ul>
                    <li> <input type="checkbox" value="black" id="black" onClick={colorCheck} />     <label htmlFor="black">Black</label> </li>
                    <li> <input type="checkbox" value="grey"  id="grey"  onClick={colorCheck} />         <label htmlFor="grey">Grey</label> </li>
                    <li> <input type="checkbox" value="blue"  id="blue"  onClick={colorCheck} />         <label htmlFor="blue">Blue</label> </li>
                </ul>
                <h3>Price:</h3>
                <input type="text" value={price.from} name="from" id="from" onChange={handleChange} />
                <label htmlFor="to">To </label>
                <input type="text" value={price.to} name="to" id="to" onChange={handleChange} />
                <br />
            </div>
            <div> {brands} </div>
            <div> {colors} </div>
            <div> {price.from} to {price.to} </div>
            <div>
                {products}
            </div>
        </div>
    )
}

export default App
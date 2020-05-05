import React,{useState} from 'react'
import Product from './Product'
import data from '../data.json'

function App(){
    const [colors,setColors]= useState([])
    const [price,setPrice]= useState({from:0,to:4000})
    const [brands,setBrands]= useState([])
    const [productData,setProductData]= useState(data)
    let products

    function showData(){
        products= productData.map(item => (
            <Product name={item.name}
                     price={item.price}
                     brand={item.brand}
                     colors={item.colors} />
        ))
    }

    showData()

    function brandCheck(event){
        const {value}= event.target
        console.log(value)

        if(event.target.checked)
            setBrands(prevBrands => ([...prevBrands,value]))

        else if(!event.target.checked){
            setBrands(prevBrands =>{
                return handleCheck(prevBrands,value)
            } )
        }
        applyFilter("brand",value)
    } 
    function colorCheck(event){
        const {value}= event.target
        console.log(value)

        if(event.target.checked)
            setColors(prevColors => ([...prevColors,value]))

        else if(!event.target.checked){
            setColors(prevColors =>{
                return handleCheck(prevColors,value)
            } )
        }
    } 

    function handleCheck(prev,value){
        const index=prev.indexOf(value)
        console.log({index})
        if(index>-1){
            prev.splice(index,1)
        }
        return [...prev]    
    }

    function handleChange(event){
        const {name,value}= event.target
        setPrice(prevPrice => ({...prevPrice,[name]:value}))
    }

    function applyFilter(name,value){
        setProductData(data.filter(product => product.brand===))
    }

    return(
        <div>
            <div>
                <h2>Filters</h2>
                <h3>Brands:</h3>
                <ul>
                    <li> <input type="checkbox" value="nike"  id="nike" onClick={brandCheck} />         <label for="nike">Nike</label> </li>
                    <li> <input type="checkbox" value="adidas" id="adidas" onClick={brandCheck} />     <label for="adidas">Adidas</label> </li>
                    <li> <input type="checkbox" value="puma"  id="puma" onClick={brandCheck} />         <label for="puma">Puma</label> </li>
                </ul>
                <h3>Colors:</h3>
                <ul>
                    <li> <input type="checkbox" value="black" id="black" onClick={colorCheck} />     <label for="black">Black</label> </li>
                    <li> <input type="checkbox" value="grey"  id="grey"  onClick={colorCheck} />         <label for="grey">Grey</label> </li>
                    <li> <input type="checkbox" value="blue"  id="blue"  onClick={colorCheck} />         <label for="blue">Blue</label> </li>
                </ul>
                <h3>Price:</h3>
                <input type="text" value={price.from} name="from" id="from" onChange={handleChange} />
                <label for="to">To </label>
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
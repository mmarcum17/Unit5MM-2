import React, {useEffect, useState}  from 'react'
import './Homepage.css'
import MerchandiseCard from './components/MerchandiseCard'
import Categories from './components/Categories'



function Homepage() {

    const[products, setMerchandise] = useState([])

    useEffect(
        ()=>{
            console.log("homepage loaded")
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then(res =>{
                console.log(res.data.results)
                setMerchandise(res.data.results)
            })
        }
    )

  return (
    <div className = "homepage-container">
        <Categories />
        {/* <MerchandiseCard /> */}
        {  products.map(item=><MerchandiseCard key={item.id} products={item} />)
                
            }
        </div>
  )
}

export default Homepage




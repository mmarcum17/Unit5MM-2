import React, {useEffect, useState}  from 'react'
import './Homepage.css'
import MerchandiseCard from '../components/Merchandise Card/MerchandiseCard'
import Categories from '../components/Categories/Categories'
import axios from 'axios'


function Homepage() {

    const[products, setProducts] = useState([])

    useEffect(
        ()=>{
            console.log("homepage loaded")
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                //see what you want
                    console.log(res.data)
                    //store it in state
                    setProducts(res.data)
            })
            .catch(err => console.log(err))
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




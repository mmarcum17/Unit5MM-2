import React, {useEffect, useState} from 'react'

function Categories() {

    const[products, setMerchandise] = useState([])

    
    useEffect(
        ()=>{
            console.log("homepage loaded")
            fetch('https://fakestoreapi.com/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then(res =>{
                console.log(res.data.results)
                setMerchandise(res.data.results)
            })
        }
    )
  return (
    <div className= "catergories-container">
       <p>{products.catergory}</p>
         
    </div>
  )
}

export default Categories
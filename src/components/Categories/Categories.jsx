// import React, {useEffect, useState} from 'react'
// import axios from 'axios'

// function Categories() {

//     const[products, setCategories] = useState([])

    
//     useEffect(
//         ()=>{
    
//             axios.get('https://fakestoreapi.com/categories')
            
//             .then(res =>{
//                 console.log(res.data.results)
//                 setCategories(res.data.results)
//             })
//         }
//     )
//   return (
//     <div className= "catergories-container">
//        <p>{products.catergory}</p>
         
//     </div>
//   )
// }

// export default Categories

import React, {useEffect, useState} from 'react'
import './Categories.css'

function Categories() {

    const[products, setMerchandise] = useState([])

    
    useEffect(
        ()=>{
            console.log("homepage loaded")


            //NOTE this fetch URL needed /products before categories. 
            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(res =>{


              //NOTE same thing here with using just res is fine. 
                console.log(res)
                setMerchandise(res)
            })
        }, []
    )
  return (
    <div className= "catergories-container">

      {/* NOTE added a .map to show product categories.  */}
       {
        products.map(item=><p key={item}>{item}</p>)
      }
    </div>
  )
}

export default Categories
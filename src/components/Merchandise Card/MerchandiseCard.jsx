import React from 'react'
import './MerchandiseCard.css'

function MerchandiseCard({products}) {
        return (
          <div className="merchandise-card">
              <p>{products.title}</p>
              <p>{products.price}</p>
              <p>{products.category}</p>
              <img src={products.image} />
          </div>
        )
      }

export default MerchandiseCard
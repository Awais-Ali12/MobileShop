import React from 'react'

const Product = ({mobileData}) => {
  return (
    <>
    {
      mobileData.map((curData)=>{
        return(
          <>
          <div className="card">
          <div className="card-body">
         <h2 className="heading">{curData.name}</h2>
         <img src= {curData.image} alt="Oops" />
         <p className="price">{curData.price}</p>
          </div>
        </div>
        </>
        )
      })
    }
    </>
  )
}

export default Product
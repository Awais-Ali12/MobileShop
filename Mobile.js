import React,{useState} from 'react'
import Product from './Product'
import Data from './DataApi'
import './mbl.css'

const Mobile = () => {
    const [mobileData, setMobileData] = useState(Data)
    const filterItem =(name)=>{
        const updateList = Data.filter((curData)=>{
            return curData.name===name
        })
        setMobileData(updateList)
    }
  return (
    <>
            <h1 className="naam">Al-Rehman Mobile</h1>
    <nav className="navbar">
        <div className="content">
            <button className="btn" onClick={()=>filterItem("Apple")} >Apple</button>
            <button className="btn" onClick={()=>filterItem("Samsung")}>Samsung</button>
            <button className="btn" onClick={()=>filterItem("Vivo")}>Vivo</button>
            <button className="btn" onClick={()=>setMobileData(Data)}>All</button>
        </div>
    </nav>
    <Product mobileData={mobileData} />
    </>
  )
}

export default Mobile
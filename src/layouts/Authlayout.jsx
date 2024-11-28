import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function Authlayout() {
  return (<>
  
  
  
    <Navbar auth={true}/>

<div className="w-50 m-auto my-5">


  <Outlet/>
</div>
{/* <div className="w-50 m-auto my-5">


  <Outlet/>
</div>
   */}
  
  
  </>  )
}

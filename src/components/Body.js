import React from 'react'
import Header from './Header'
import Login from './Login'

const Body = () => { 
  return (
    <div className="bg-background bg-cover h-screen">
        <Header/>
        <Login/>
    </div>
  )
}

export default Body
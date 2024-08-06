import React, { useState, useEffect } from 'react'
import Password from './Components/Password'
import Header from './Components/Header'
import CenterDiv from './Components/CenterDiv'
import useTheme from './Context/Context'


const App = () => {

  const { thememode } = useTheme();
  // console.log(thememode);


  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode?'light':'dark')
  }, [thememode])

 
 
  return (
    <>
    <Header />
    <Password />
    <CenterDiv />
    </>
   




  )
}

export default App
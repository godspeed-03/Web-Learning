import React, { useState, useEffect } from 'react'
import Password from './Components/Password'
import Header from './Components/Header'
import CenterDiv from './Components/CenterDiv'
import useTheme from './Context/Context'
import { useSelector } from 'react-redux'
import DownloadButton from './Components/doenload'


const App = () => {

  // const { thememode } = useTheme();
  // console.log(thememode);
  const tmememode = useSelector(state => state.theme.thememode);
  console.log(tmememode);

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(tmememode?'light':'dark')
  }, [tmememode])

 
 
  return (
    <>
    <DownloadButton />
    <Header />
    <Password />
    <CenterDiv />
    </>
   




  )
}

export default App
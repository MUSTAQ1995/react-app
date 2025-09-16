import React from 'react'
import Home from './Home'
import ThemeProvider from './ThemeProvider'

const ContextApp = () => {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

export default ContextApp
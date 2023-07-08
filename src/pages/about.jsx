import React from 'react'
import { useTheme } from 'next-themes'
import NavBar from '@/components/Navbar'

const about = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <NavBar/>
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </>
  )
}

export default about

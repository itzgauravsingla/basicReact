import { NavLink, Outlet } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { useEffect, useState } from 'react';
import { Toggle } from './components/index.js';

function App() {

  const [theme, setTheme] = useState('light');
  const darkMode = () => {
    setTheme('dark');
  }
  const lightMode = () => {
    setTheme('light')
  }

  useEffect(() => {
    const htmlBody = document.querySelector('html');
    htmlBody?.classList.remove('dark', 'light');
    htmlBody?.classList.add(theme);
  }, [theme])

  return (
    <div className='flex justify-center items-center h-screen dark:bg-gray-800'>
      <ThemeProvider value={{theme, darkMode, lightMode}}>
        <div className='flex flex-col gap-1 min-w-max me-2 h-full'>
          <h2 className='text-2xl font-semibold text-black dark:text-white'>Where do u want to go?</h2>
          <NavLink to={'counter'} className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-800 dark:text-white' }`}>Counter</NavLink>
          <NavLink to={'pass-generator'} className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-800 dark:text-white' }`}>Password Generator</NavLink>
          <NavLink to={'carousel'} className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-800 dark:text-white' }`}>Carousel</NavLink>
          <NavLink to={'todo'} className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-800 dark:text-white' }`}>Todo</NavLink>
          <div className='mt-auto mb-4 mx-auto'>
            {theme}
            <Toggle />
          </div>
        </div>
      </ThemeProvider>
      <div className='flex-grow h-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default App;

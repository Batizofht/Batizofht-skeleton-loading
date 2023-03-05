import React from 'react'
import Profile from './Profile'
import Posts from './Posts'
import useLocalStorage from 'react-use-localstorage'


const Home = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () =>
    {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
  return (
    <div className='AppTwo' data-theme={theme}>
    <center><button className='Switch' onClick={switchTheme}>Switch</button></center>
    <div className='inline' data-theme={theme}>
      
        <Posts themehere={theme}  />
        <Profile themehere={theme}/>
    </div></div>
  )
}

export default Home
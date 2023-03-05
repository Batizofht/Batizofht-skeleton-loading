import React from 'react'
import Profile from './Profile'
import Posts from './Posts'
import 'bootstrap/dist/css/bootstrap.css';
import useLocalStorage from 'react-use-localstorage'


const Home = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () =>
    {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
  return (
    <div className='navbar customenav'>
    <div className='AppTwo' data-theme={theme}>
    <center><button className='Switch' onClick={switchTheme}>Switch</button></center>
    <div className='inline' data-theme={theme}>
      
        
    </div></div></div>
  )
}

export default Home
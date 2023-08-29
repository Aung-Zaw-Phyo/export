import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {

  const request = async() => {
    const response = await fetch('http://13.228.72.15:5000/chat/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: 'aungzawphyo1102@gmail.com', password: 'studyITin2$'})
    })
    const resData = await response.json()
    console.log(resData)
  }

  return (
    <div className={classes.home}>
        <div className={classes.content}>
          <div className={classes.icon}><i className="fa-solid fa-print"></i></div>
          <p className='mb-0'>Export PDF and Print Your Data</p> 
          <p>For Personal or Bussiness</p>
        </div>
        <div>
          <button onClick={request}>click</button>
          <Link to='/personal'>Personal</Link>
          <Link to='/bussiness'>Bussiness</Link>
        </div>
      </div>
  )
}

export default Home

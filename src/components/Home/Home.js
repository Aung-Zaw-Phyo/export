import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.content}>
          <div className={classes.icon}><i className="fa-solid fa-print"></i></div>
          <p className='mb-0'>Export PDF and Print Your Data</p> 
          <p>For Personal or Bussiness</p>
        </div>
        <div>
          <Link to='/personal'>Personal</Link>
          <Link to='/bussiness'>Bussiness</Link>
        </div>
      </div>
  )
}

export default Home

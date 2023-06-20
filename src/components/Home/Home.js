import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={classes.home}>
        <div>
          <Link to='/personal'>Personal</Link>
          <Link to='/company'>Company</Link>
        </div>
      </div>
  )
}

export default Home

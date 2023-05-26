

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'
import './ActiveLink.css'

const ActiveLink = ({to,children}) => {
  return (
        <NavLink
  to={to}
  className={ ({ isActive}) => isActive ? "active" : "no_active"}
>
{children}
</NavLink>
  )
}

export default ActiveLink
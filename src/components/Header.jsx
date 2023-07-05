import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div>
        <nav>
            <h3 className='nav_organization'>Organização</h3>
            <h3 className='nav_tasks'>Tarefas</h3>
        </nav>
    </div>
  )
}

export default Header
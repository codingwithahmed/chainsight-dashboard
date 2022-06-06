import './Sidebar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {


  
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const Menu = [
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer'
    },
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer'
    },
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer'
    },
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer'
    }
  ]

  const logo = <p className='logo'>Chainsight.</p>
  const links = <div>asd</div>

  return (
    <>
    <nav className='desktop-nav'> 
    {logo}
    <div>
      {
        Menu.map((item) => {
          return <button key={item.title} className='btn'>{item.title}</button>
        })
      }
      </div>
      {links}
    </nav>
    <button className='hamburger' onClick={toggleDrawer}><FontAwesomeIcon icon={faBars} /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='mobile-nav'
            >
              {logo}
                  {
          Menu.map((item) => {
            return <button key={item.title} className='btn'>{item.title}</button>
          })
        }
        {links}
            </Drawer>
    </>
  )
}

export default Sidebar
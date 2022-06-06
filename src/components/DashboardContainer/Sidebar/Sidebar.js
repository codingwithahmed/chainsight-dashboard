import './Sidebar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import selectedRouteState from '../../../state/SelectedRoute'
import { useRecoilState } from 'recoil'

const Sidebar = () => {


  const [selectedRoute, setSelectedRoute] = useRecoilState(selectedRouteState)

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const checkSelected = (route) => {
    if (route === selectedRoute) {
      return ' selected'
    } else {
      return ''
    }
  }

  const selectRoute = (route) => {
    setSelectedRoute(route)    
  }

  const Menu = [
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer'
    },
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer2'
    },
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer3'
    },
    {
      title: 'Wallet Analyzer',
      route: 'wallet_analyzer4'
    }
  ]

  const logo = <p className='logo'>Chainsight.</p>
  const links = <div></div>

  return (
    <>
    <nav className='desktop-nav'> 
    {logo}
    <div>
      {
        Menu.map((item) => {
          return <button key={item.title} onClick={() =>{selectRoute(item.route)}} className={'btn' + checkSelected(item.route)}>{item.title}</button>
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
            return <button key={item.title} onClick={() =>{selectRoute(item.route)}} className={'btn' + checkSelected(item.route)}>{item.title}</button>
          })
        }
        {links}
            </Drawer>
    </>
  )
}

export default Sidebar
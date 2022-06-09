import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faWallet, faChartLine, faDollarSign, faChartColumn, faGear, faLock, faBars } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { DashboardRouter } from '../../state/DashbaordRouter'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const DashboardContainer = ({children}) => {


  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const [dashboardRoute, setDashbaordRoute] = useRecoilState(DashboardRouter)

  const MENU = [
    {
      title: 'Home',
      icon: faHome,
      route: 'home'
    },
    {
      title: 'Wallet Analyzer',
      icon: faWallet,
      route: 'wallet_analyzer'
    },
    {
      title: 'Token Analyzer',
      icon: faChartLine,
      route: 'token_analyzer'
    },
    {
      title: 'Rich List',
      icon: faDollarSign,
      route: 'rich_list'
    },
    {
      title: 'Trending Contracts',
      icon: faChartColumn,
      route: 'trending_contracts'
    }

  ]

  const NAVIGATION = [
    {
      title: 'Settings',
      icon: faGear,
      route: 'settings'
    } ,
    {
      title: 'Logout',
      icon: faLock,
      route: 'logout'
    }
  ]


  const routerChecker = (route) => {
    if (route === dashboardRoute) {
      return ' text-slate-900'
    } else {
      return ' text-slate-300'
    }
  }

  const routerSelector = (route) => {
    setDashbaordRoute(route)
    console.log(dashboardRoute)
  }

  

  const LOGO = <div className='logo text-2xl font-extrabold text-center w-full mb-8 text-slate-900'>
                  Chainsight.
                </div>
  
  const MOBILE_LOGO = <div className='logo text-2xl font-extrabold text-center w-fulltext-slate-900'>
                  Chainsight.
                </div>

  const DESKTOP =     <main className='hidden items-start  lg:flex'>
                      <div className='flex flex-col mx-6'>
                      <nav className='flex flex-col items-start w-[200px] p-6'>
                        {LOGO}
                      {
                        MENU.map((item) => {
                          return <button className={'text-sm font-bold cursor-pointer py-2 hover:text-slate-900' + routerChecker(item.route)} onClick={() => {routerSelector(item.route)}}><FontAwesomeIcon icon={item.icon} /> {item.title}</button>
                        })
                      }
                      </nav>
                      <nav className='flex flex-col items-start w-[200px] p-6 border-t-slate-300 border-t-2'>
                      {
                        NAVIGATION.map((item) => {
                          return <button className={'text-sm font-bold cursor-pointer py-2 hover:text-slate-900' + routerChecker(item.route)} onClick={() => {routerSelector(item.route)}}><FontAwesomeIcon icon={item.icon} /> {item.title}</button>
                        })
                      }
                      </nav>
                      </div>
                      <section className='content bg-slate-100 w-full min-h-[100vh]'>
                        {children}
                      </section>
                    </main>        
  
  const MOBILE =  <>
                  <div className='flex justify-between items-center p-4 lg:hidden'>
                  <button className='' onClick={toggleDrawer}><FontAwesomeIcon icon={faBars} /></button>
                  {MOBILE_LOGO}
                  <div></div>
                  </div>
                  <Drawer
                      open={isOpen}
                      onClose={toggleDrawer}
                      direction='left'
                      className='w-[150px]'
                  >
                    <main className='flex items-start lg:hidden'>
                    <div className='flex flex-col mx-6'>
                    <nav className='flex flex-col items-start w-[200px] p-6'>
                     
                    {
                      MENU.map((item) => {
                        return <button className={'text-sm font-bold cursor-pointer py-2 hover:text-slate-900' + routerChecker(item.route)} onClick={() => {routerSelector(item.route)}}><FontAwesomeIcon icon={item.icon} /> {item.title}</button>
                      })
                    }
                    </nav>
                    <nav className='flex flex-col items-start w-[200px] p-6 border-t-slate-300 border-t-2'>
                    {
                      NAVIGATION.map((item) => {
                        return <button className={'text-sm font-bold cursor-pointer py-2 hover:text-slate-900' + routerChecker(item.route)} onClick={() => {routerSelector(item.route)}}><FontAwesomeIcon icon={item.icon} /> {item.title}</button>
                      })
                    }
                    </nav>
                    </div>
                  </main>
                  </Drawer>
                    <section className='content bg-slate-100 w-full min-h-[100vh] lg:hidden'>
                      {children}
                    </section>
                  </>
  

  return (
    <>
      {DESKTOP}
      {MOBILE}
    </>
  )
}

export default DashboardContainer
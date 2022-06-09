import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faWallet, faChartLine, faDollarSign, faChartColumn, faGear, faLock } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { DashboardRouter } from '../../state/DashbaordRouter'

const DashboardContainer = ({children}) => {

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

  return (
    <main className='flex items-start'>
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
  )
}

export default DashboardContainer
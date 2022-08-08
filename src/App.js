import DashboardContainer from './components/DashboardContainer/DashboardContainer';
import './App.css';
import Home from './components/Home/Home';
import { useRecoilState } from 'recoil';
import { DashboardRouter ,Token} from './state/DashbaordRouter';
import WalletAnalyzer from './components/WalletAnalyzer/WalletAnalyzer';
import TokenAnalyzer from './components/TokenAnalyzer/TokenAnalyzer';
import RichList from './components/RichList/RichList';
import TrendingContracts from './components/TrendingContracts/TrendingContracts';
import Settings from './components/Settings/Settings';
import Auth from './components/Auth/index'
import authenticationState from './state/Authentication';
import { useEffect } from 'react';
import { refreshLogin, register } from './services/Authentication';

function App() {

  const [dashboardRoute, setDashboardRoute] = useRecoilState(DashboardRouter)
  const [authentication, setAuthentication] = useRecoilState(authenticationState)
  

  useEffect(()=>{
    const access_token = window.localStorage.getItem('access_token')
    const refresh_token = window.localStorage.getItem('refresh_token')
    const is_authenticated = window.localStorage.getItem('is_authenticated')

    if (is_authenticated === 'true') {
      setAuthentication(true)
    }

    console.log(is_authenticated)
  }, [])

  const routeChecker = (route) => {
    if (route === dashboardRoute) {
      return true
    }
  }


  if (authentication) {
    return (<DashboardContainer>
      {routeChecker('home') && (<Home />)}
      {routeChecker('wallet_analyzer') && (<WalletAnalyzer />)}
      {routeChecker('token_analyzer') && (<TokenAnalyzer />)}
      {routeChecker('rich_list') && (<RichList />)}
      {routeChecker('trending_contracts') && (<TrendingContracts />)}
      {routeChecker('settings') && (<Settings />)}
    </DashboardContainer> )
  } else {
    return (<Auth />)
  }

}

export default App;

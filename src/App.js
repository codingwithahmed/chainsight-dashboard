import DashboardContainer from './components/DashboardContainer/DashboardContainer';
import './App.css';
import Home from './components/Home/Home';
import { useRecoilState } from 'recoil';
import { DashboardRouter } from './state/DashbaordRouter';
import WalletAnalyzer from './components/WalletAnalyzer/WalletAnalyzer';
import TokenAnalyzer from './components/TokenAnalyzer/TokenAnalyzer';
import RichList from './components/RichList/RichList';
import TrendingContracts from './components/TrendingContracts/TrendingContracts';
import Settings from './components/Settings/Settings';

function App() {

  const [dashboardRoute, setDashboardRoute] = useRecoilState(DashboardRouter)

  const routeChecker = (route) => {
    if (route === dashboardRoute) {
      return true
    }
  }

  return (
    <DashboardContainer>
      {routeChecker('home') && (<Home />)}
      {routeChecker('wallet_analyzer') && (<WalletAnalyzer />)}
      {routeChecker('token_analyzer') && (<TokenAnalyzer />)}
      {routeChecker('rich_list') && (<RichList />)}
      {routeChecker('trending_contracts') && (<TrendingContracts />)}
      {routeChecker('settings') && (<Settings />)}

    </DashboardContainer>
  );
}

export default App;

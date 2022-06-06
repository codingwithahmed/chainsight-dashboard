import './DashboardContainer.css'
import Sidebar from './Sidebar/Sidebar'


const DashbaordContainer = ({children, }) => {


  return (
    <div className='container'>
        <Sidebar />
        <div className='content'>
        {children}
        </div>
    </div>
  )
}

export default DashbaordContainer
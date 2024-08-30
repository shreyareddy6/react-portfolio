// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default App
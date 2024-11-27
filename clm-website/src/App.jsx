import './App.css';
import Home from './pages/Home';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App

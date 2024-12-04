import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import FindUs from './pages/FindUs.jsx';
import Youth from './pages/Youth.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  errorElement: <h1>Error 404 Couldn't find page</h1>,
  children: [
    { index: true, element: <Home />},
    { path: 'about', element: <About />},
    { path: 'find-us', element: <FindUs />},
    { path: 'youth', element: <Youth />}
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Vision from './components/Vision.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  errorElement: <h1>Error 404 Couldn't find page</h1>,
  children: [
    { index: true, element: <Home />},
    { path: 'about', element: <Vision />}
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './Components/Navbar';
import TicketForm from './Components/TicketForm';
import Client from './Components/Client';
import SupportWindow from './Components/SupportWindow';


function App() {
  const RouteWrapper = () => {
    let routes = useRoutes([
      { path: '/ticket', element: <AuthContextProvider><Protected><TicketForm /></Protected></AuthContextProvider>  },
      { path: '/support', element: <AuthContextProvider><Protected> <SupportWindow /> </Protected></AuthContextProvider> },
      { path: '/', element: <Home /> },
      { path: '/supportlogin', element: <AuthContextProvider><Login /></AuthContextProvider> }
     
    ])
    return routes;
  }
  
  return (
    <div>
      <Router>
          <RouteWrapper />
        </Router>
    
      
      
    </div>
  );
}


export default App;

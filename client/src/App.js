import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes} from 'react-router-dom'
import Chat from './components/Chat';
import Home from './components/Home';
import Login from './components/Login';
import Protected from './components/Protected';
import Register from './components/Register';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import TicketForm from './components/TicketForm';
import CustomerTickets from './components/CustomerTickets';
import Client from './components/Client';
import SupportWindow from './components/SupportWindow';



function App() {
  const RouteWrapper = () => {
    let routes = useRoutes([
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/new-ticket', element: <Protected><TicketForm /></Protected> },
      { path: '/home', element: <Protected><Home /></Protected> },
      { path: '/chat', element: <Protected> <Chat /> </Protected> },
      { path: '/support', element: <AuthContextProvider><Protected> <SupportWindow /> </Protected></AuthContextProvider> },
      { path: '/ticket-dashboard', element: <Protected> <CustomerTickets /> </Protected> },
     
    ])
    return routes;
  }
  return (
    <div>
      <AuthContextProvider>
      {/* <Navbar/> */}
      <Router>
        <RouteWrapper />
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;

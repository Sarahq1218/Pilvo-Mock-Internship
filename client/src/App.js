import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes} from 'react-router-dom'
import Chat from './Components/Chat';
import Login from './Components/Login';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  const RouteWrapper = () => {
    let routes = useRoutes([
      { path: '/', element: <Login /> },
      { path: '/chat', element: <Protected> <Chat /> </Protected> },
     

    ])
    return routes;
  }
  return (
    <div>
      <AuthContextProvider>
      <Router>
        <RouteWrapper />
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;

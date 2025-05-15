import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components';
import AppRoutes from './Routes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }} >
      <div className="relative z-0  bg-primary ">
        <Navbar />
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
};

export default App;

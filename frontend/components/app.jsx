import React from 'react';
import { Link } from 'react-router';
import Header from './header/header';

const App = ({ children }) => (
  <div>

    <Header />
    
    {children}
  </div>
);

export default App;

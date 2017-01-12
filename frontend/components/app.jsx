import React from 'react';
import { Link } from 'react-router';
import Header from './header/header';
import BatchesIndexContainer from './batches/batch_index_container';

const App = ({ children }) => (
  <div>

    <Header />
    {children}
  </div>
);

export default App;

import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import BatchesIndexContainer from './batches/batch_index_container';

const App = ({ children, store }) => (
  <div>

    <HeaderContainer store={store} />
    {children}
    <div className="footer">
      
    </div>
  </div>
);

export default App;

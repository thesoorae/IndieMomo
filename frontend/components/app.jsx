import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import BatchesIndexContainer from './batches/batch_index_container';

class App extends React.Component{
  constructor(props) {
    super(props);


  };

    render(){
      return (
        <div>

        <HeaderContainer store={this.props.store} />
        {this.props.children}
        <div className="footer">

        </div>
      </div>

      )
    }
  };

export default App;

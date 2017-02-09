import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import BatchesIndexContainer from './batches/batch_index_container';
import Footer from './footer/footer';

class App extends React.Component{
  constructor(props) {
    super(props);


  };

    openGithub(e){
      e.preventDefault();
      window.open('https://www.linkedin.com/in/soorae')
    }

    openLinkedin(e){
      e.preventDefault();
      window.open('https://www.linkedin.com/in/soorae')

    }

    render(){
      return (
        <div>

        <HeaderContainer store={this.props.store} />
        {this.props.children}

        <Footer />
      </div>

      )
    }
  };

export default App;

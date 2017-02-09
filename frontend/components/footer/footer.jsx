import React from 'react';

class Footer extends React.Component {

    render(){
      return(
        <div className="footer">
          <img className="clickable"
            src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_40/v1486606533/icons/github-10-xxl.png'
            onClick={this.openGithub} />
          <img
            src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_40/v1486606540/icons/linkedin-5-xl.png'
            className="clickable"
            onClick={this.openGithub} />
      </div>
      )
    }
}




export default Footer;

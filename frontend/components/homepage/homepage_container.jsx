import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Homepage from './homepage';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import UserProfile from './user_profile';
import {getUser} from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: getUser(ownProps.params.userId, state.users),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

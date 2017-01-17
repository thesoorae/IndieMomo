import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import UserProfile from './user_profile';
import {getUser, editUser} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => (
{
  currentUser: state.session.currentUser,
  user: state.userProfile,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  editUser: user => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

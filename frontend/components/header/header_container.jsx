import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = ({ session }) => {
  console.log(session.currentUser);
  return {
  currentUser: session.currentUser
};};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

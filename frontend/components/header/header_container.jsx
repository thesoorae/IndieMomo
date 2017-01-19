import { connect } from 'react-redux';
import Header from './header';
import {asArray} from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
  currentUser: state.session.currentUser,
  batches: asArray(state.batches)

};};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

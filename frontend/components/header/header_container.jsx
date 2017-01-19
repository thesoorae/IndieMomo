import { connect } from 'react-redux';
import Header from './header';
import {asArray} from '../../reducers/selectors';
import {fetchSearchResults} from '../../actions/batch_actions';

const mapStateToProps = state => {
  return {
  currentUser: state.session.currentUser,
  batches: asArray(state.batches)

};};

const mapDispatchToProps = dispatch => ({
fetchSearchResults: title => dispatch(fetchSearchResults(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

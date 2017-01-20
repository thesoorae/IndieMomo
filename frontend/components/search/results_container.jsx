import { connect } from 'react-redux';

import Results from './results';
import {fetchSearchResults} from '../../actions/batch_actions';


import {asArray} from '../../reducers/selectors';

const mapStateToProps = (state, own_props) => ({
  batches: asArray(state.batches),
  errors: state.errors,
  search: own_props.params.search_term
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: title => dispatch(fetchSearchResults(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

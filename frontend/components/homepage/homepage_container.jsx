import { connect } from 'react-redux';

import Homepage from './homepage';


import {fetchBatches} from '../../actions/batch_actions';
import {asArray} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  batches: asArray(state.batches),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchBatches : () => dispatch(fetchBatches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

import BatchIndex from './batch_index';
import {connect} from 'react-redux';
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
)(BatchIndex);

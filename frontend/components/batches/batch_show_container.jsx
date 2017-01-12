import BatchShow from './batch_show';
import {connect} from 'react-redux';
import {updateBatch, deleteBatch} from '../../actions/batch_actions';

const mapStateToProps = (state, ownProps) => ({
  batch: state.batches[ownProps.params.batchId]
});


const mapDispatchToProps = dispatch => ({
  updateBatch: (batch) => dispatch(updateBatch(batch)),
  deleteBatch: id => dispatch(deleteBatch(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BatchShow);
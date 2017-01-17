import {connect} from 'react-redux';
import BatchForm from './batch_form';
import {fetchBatches, createBatch, updateBatch, deleteBatch} from '../../actions/batch_actions';
import {getBatch} from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  

  return(
  { batch: getBatch(ownProps.params.batchId, state.batches),
    batchId: ownProps.params.batchId,
    currentUser: state.session.currentUser,
    errors: state.errors.batch
  }
);};


const mapDispatchToProps = (dispatch, ownProps) => (
  { fetchBatches: () => dispatch(fetchBatches()),
    deleteBatch : id => dispatch(deleteBatch(id)),
    updateBatch: batch => dispatch(updateBatch(batch))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BatchForm);

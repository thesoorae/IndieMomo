import {connect} from 'react-redux';
import OrderOptionsEdit from './order_options_edit';
import {createOption, updateOption, deleteOption} from '../../actions/order_option_actions';
import {getBatch} from '../../reducers/selectors';
import {updateBatch} from '../../actions/batch_actions';


const mapStateToProps = (state, ownProps) => {


  return(
  { batch: getBatch(ownProps.params.batchId, state.batches),
    batchId: ownProps.params.batchId,
    currentUser: state.session.currentUser,
    errors: state.errors.batch
  }
);};


const mapDispatchToProps = (dispatch, ownProps) => (
  { createOption: option => dispatch(createOption(option)),
    deleteOption : id => dispatch(deleteOption(id)),
    updateOption: option => dispatch(updateOption(option)),
    updateBatch : batch => dispatch(updateBatch(batch))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderOptionsEdit);

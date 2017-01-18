import {connect} from 'react-redux';
import OrderOptionsEdit from './order_options_edit';
import {createOption, updateOption, deleteOption} from '../../actions/order_option_actions';
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
  { createOption: option => dispatch(createOption(option)),
    deleteOption : id => dispatch(deleteOption(id)),
    updateOption: option => dispatch(updateOption(option))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderOptionsEdit);

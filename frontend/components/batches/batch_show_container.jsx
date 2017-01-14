import BatchShow from './batch_show';
import {connect} from 'react-redux';
import {updateBatch, deleteBatch} from '../../actions/batch_actions';
import {createOrder} from '../../actions/order_actions';
import {getBatch} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  batch: state.batches[ownProps.params.batchId],
  currentUser: state.session.currentUser

});


const mapDispatchToProps = dispatch => ({
  updateBatch: (batch) => dispatch(updateBatch(batch)),
  deleteBatch: id => dispatch(deleteBatch(id)),
  createOrder: order => dispatch(createOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(BatchShow);

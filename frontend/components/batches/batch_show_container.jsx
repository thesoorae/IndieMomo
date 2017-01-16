import BatchShow from './batch_show';
import {connect} from 'react-redux';
import {updateBatch, deleteBatch} from '../../actions/batch_actions';
import {createOrder} from '../../actions/order_actions';
import {getBatch} from '../../reducers/selectors';
import {getUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  batch: state.batches[ownProps.params.batchId],
  currentUser: state.session.currentUser

});


const mapDispatchToProps = dispatch => ({
  updateBatch: (batch) => dispatch(updateBatch(batch)),
  deleteBatch: id => dispatch(deleteBatch(id)),
  createOrder: order => dispatch(createOrder(order)),
  getUser: id=> dispatch( getUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BatchShow);

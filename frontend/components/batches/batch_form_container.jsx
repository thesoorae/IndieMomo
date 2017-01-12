import {connect} from 'react-redux';
import BatchForm from './batch_form';
import {createBatch, updateBatch, deleteBatch} from '../../actions/batch_actions';

const mapStateToProps = (state, ownProps) => {
  const formtype = ownProps.location.pathname === "/batches/new" ?  "new" : "edit";
  let batch = {
    title: "",
    category: "Uncategorized",
    description:"No Description yet",
    goal:20,
    zip_code: "None",
    order_description:"1 Piece",
    chef_id: null,
    active: false};
  if(formtype === "edit"){
    batch = state.batch[ownProps.params.batchId];
  }
  return {
    formtype,
    batch,
    currentUser: state.session.currentUser,
    errors: state.errors.batch
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.location.pathname === "/batches/new" ? createBatch : updateBatch;
  return {
    processForm: batch => dispatch(action(batch)),
    deleteBatch : id => dispatch(deleteBatch(id)),
    updateBatch: batch => dispatch(updateBatch(batch))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BatchForm);

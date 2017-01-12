import {connect} from 'react-redux';
import NewBatchForm from './new_batch_form';
import {createBatch} from '../../actions/batch_actions';

const mapStateToProps = (state, ownProps) => {
  const formtype = ownProps.location.pathname === "/batches/new" ?  "new" : "edit";
  let batch = {
    title: "",
    goal: "",
    zip_code: state.session.currentUser.zip_code,
    chef_id: state.session.currentUser.id,
    active: false};
    return {
    batch,
    currentUser: state.session.currentUser,
    errors: state.errors.batch
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBatch: batch => dispatch(createBatch(batch))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBatchForm);

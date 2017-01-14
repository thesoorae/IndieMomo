import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import BatchesReducer from './batch_reducer';
import ErrorsReducer from './errors_reducer';
import OrdersReducer from './order_reducer';


const RootReducer = combineReducers({
session: SessionReducer,
batches: BatchesReducer,
orders: OrdersReducer,
errors: ErrorsReducer

});

export default RootReducer;

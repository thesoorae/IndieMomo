import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import BatchesReducer from './batch_reducer';
import ErrorsReducer from './errors_reducer';
import OrdersReducer from './order_reducer';
import UserReducer from './user_reducer';
import OptionsReducer from './options_reducer';

const RootReducer = combineReducers({
session: SessionReducer,
batches: BatchesReducer,
orders: OrdersReducer,
userProfile: UserReducer,
errors: ErrorsReducer,
options: OptionsReducer

});

export default RootReducer;

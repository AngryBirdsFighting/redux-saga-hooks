import { combineReducers } from 'redux';

import users from './user.js';
import counter from './counter.js';

export default combineReducers({
    users,
    counter
});
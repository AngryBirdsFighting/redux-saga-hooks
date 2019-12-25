import { FETCH_USER_SUCCEEDED, FETCH_USER_REQUEST, FETCH_USER_ERROR } from '../constants/counter';

const initState = {
    isLoading:false,
    error:null,
    data:null
}
const users = (state = initState, action = {}) => {
    switch(action.type) {
    case FETCH_USER_REQUEST:
        return {
            isLoading:true,
            error:null,
            data:null
        }
    case FETCH_USER_SUCCEEDED:
        return {
            isLoading:false,
            error:null,
            data:action.data.data[0].email
        }
    case FETCH_USER_ERROR:
        return {
            isLoading:false,
            error:action.error,
            data:null
        }
    default: return state;
    }
}

export default users;
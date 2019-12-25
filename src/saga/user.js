import { takeEvery, call, put} from 'redux-saga/effects';
import {  FETCH_USER_REQUEST, FETCH_TODO_REQUEST, FETCH_USER_SUCCEEDED } from '../constants/counter';
import axiox from 'axios'

function* fetchUserInfo(){
    let info =  yield call(axiox.get, 'http://jsonplaceholder.typicode.com/users')
    yield put({type:FETCH_USER_SUCCEEDED, data:info})
}
function* fetchTodoInfo(){
    let info =  yield call(axiox.get, 'http://jsonplaceholder.typicode.com/todos')
    console.log(info)
}
function* watchFetchUserInfo() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUserInfo);
}
function* watchFetchTodoInfo() {
    yield takeEvery(FETCH_TODO_REQUEST, fetchTodoInfo);
}

export default  [
    watchFetchTodoInfo(),
    watchFetchUserInfo()
]
import { all } from 'redux-saga/effects';
import counterSaga from './counter';
import userSaga from './user'


export default function* rootSaga (){
    yield all([
        ...userSaga,
        ...counterSaga
    ])
}
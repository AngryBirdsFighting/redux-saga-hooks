import { takeEvery, put } from 'redux-saga/effects';
import { INCREMENT_ASYNC, INCREMENT} from '../constants/counter';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync(){
    yield delay(2000)
    yield put({type: INCREMENT})
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export default  [
    watchIncrementAsync()
]
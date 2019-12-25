import { FETCH_USER_REQUEST, FETCH_TODO_REQUEST } from '../constants/counter'

export const getUserInfo = () =>({type: FETCH_USER_REQUEST})
export const getTodoInfo = () =>({type: FETCH_TODO_REQUEST})
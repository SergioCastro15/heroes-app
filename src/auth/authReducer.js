import { types } from '../types/types';

export const authReducer = ( state = {}, action ) => {

    const typeOfLogin = {
        [types.login]: { ...action.payload, logged: true },
        [types.logout]: { logged: false } 
    }

    return typeOfLogin[action.type] || state; 
}
import {User} from '../user.model';
import {AuthActions, LOGIN, Login, LOGOUT} from './auth.actions';

export interface State {
  user: User;
}

const initialState = {
  user: null
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case LOGIN:
      return getLoginAction(state, action as Login);
    case LOGOUT:
      return getLogoutAction(state);
    default:
      return state;
  }
}

function getLoginAction(state, action: Login) {
  const user = new User(
    action.payload.email,
    action.payload.userId,
    action.payload.token,
    action.payload.expirationDate
  );
  return { ...state, user };
}

function getLogoutAction(state) {
  return { ...state, user: null};
}

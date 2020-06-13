import {User} from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      return getAuthenticateSuccessAction(state, action as AuthActions.AuthenticateSuccess);
    case AuthActions.LOGOUT:
      return getLogoutAction(state);
    case AuthActions.LOGIN_START:
    case AuthActions.SIGNUP_START:
      return getAuthenticateStartAction(state);
    case AuthActions.AUTHENTICATE_FAIL:
      return getAuthenticateFailAction(state, action as AuthActions.AuthenticateFail);
    case AuthActions.CLEAR_ERROR:
      return getClearErrorAction(state);
    default:
      return state;
  }
}

function getAuthenticateSuccessAction(state, action: AuthActions.AuthenticateSuccess) {
  const user = new User(
    action.payload.email,
    action.payload.userId,
    action.payload.token,
    action.payload.expirationDate
  );
  return {
    ...state,
    user,
    authError: null,
    login: false
  };
}

function getLogoutAction(state) {
  return {
    ...state,
    user: null
  };
}

function getAuthenticateStartAction(state) {
  return {
    ...state,
    authError: null,
    loading: true
  };
}

function getAuthenticateFailAction(state, action: AuthActions.AuthenticateFail) {
  return {
    ...state,
    user: null,
    authError: action.payload,
    loading: false
  };
}

function getClearErrorAction(state) {
  return {
    ...state,
    authError: null
  };
}

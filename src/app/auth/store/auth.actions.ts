import {Action} from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Logout]';

export class AuthenticateSuccess implements Action {
  readonly  type: string = AUTHENTICATE_SUCCESS;

  constructor(public payload: {
    email: string,
    userId: string,
    token: string,
    expirationDate: Date
  }) {
  }
}

export class Logout implements Action {
  readonly type: string = LOGOUT;
}

export class LoginStart implements Action {
  readonly type: string = LOGIN_START;

  constructor(public payload: {
    email: string;
    password: string;
  }) {
  }
}

export class AuthenticateFail implements Action {
  readonly type: string = AUTHENTICATE_FAIL;

  constructor(public payload: string) {
  }
}

export class SignUpStart implements Action{
  readonly type: string = SIGNUP_START;

  constructor(public payload: {
    email: string,
    password: string
  }) {
  }
}

export class ClearError implements Action {
  readonly type: string = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type: string = AUTO_LOGIN;
}

export type AuthActions =
  | LoginStart
  | Logout
  | AuthenticateSuccess
  | AuthenticateFail
  | SignUpStart
  | ClearError
  | AutoLogin;

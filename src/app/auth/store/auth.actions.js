"use strict";
exports.__esModule = true;
exports.LOGIN_START = '[Auth] Login Start';
exports.AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
exports.AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
exports.SIGNUP_START = '[Auth] Signup Start';
exports.CLEAR_ERROR = '[Auth] Clear Error';
exports.AUTO_LOGIN = '[Auth] Auto Login';
exports.LOGOUT = '[Auth] Logout]';
var AuthenticateSuccess = /** @class */ (function () {
    function AuthenticateSuccess(payload) {
        this.payload = payload;
        this.type = exports.AUTHENTICATE_SUCCESS;
    }
    return AuthenticateSuccess;
}());
exports.AuthenticateSuccess = AuthenticateSuccess;
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = exports.LOGOUT;
    }
    return Logout;
}());
exports.Logout = Logout;
var LoginStart = /** @class */ (function () {
    function LoginStart(payload) {
        this.payload = payload;
        this.type = exports.LOGIN_START;
    }
    return LoginStart;
}());
exports.LoginStart = LoginStart;
var AuthenticateFail = /** @class */ (function () {
    function AuthenticateFail(payload) {
        this.payload = payload;
        this.type = exports.AUTHENTICATE_FAIL;
    }
    return AuthenticateFail;
}());
exports.AuthenticateFail = AuthenticateFail;
var SignUpStart = /** @class */ (function () {
    function SignUpStart(payload) {
        this.payload = payload;
        this.type = exports.SIGNUP_START;
    }
    return SignUpStart;
}());
exports.SignUpStart = SignUpStart;
var ClearError = /** @class */ (function () {
    function ClearError() {
        this.type = exports.CLEAR_ERROR;
    }
    return ClearError;
}());
exports.ClearError = ClearError;
var AutoLogin = /** @class */ (function () {
    function AutoLogin() {
        this.type = exports.AUTO_LOGIN;
    }
    return AutoLogin;
}());
exports.AutoLogin = AutoLogin;

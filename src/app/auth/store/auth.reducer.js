"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var user_model_1 = require("../user.model");
var AuthActions = require("./auth.actions");
var initialState = {
    user: null,
    authError: null,
    loading: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActions.AUTHENTICATE_SUCCESS:
            return getAuthenticateSuccessAction(state, action);
        case AuthActions.LOGOUT:
            return getLogoutAction(state);
        case AuthActions.LOGIN_START:
        case AuthActions.SIGNUP_START:
            return getAuthenticateStartAction(state);
        case AuthActions.AUTHENTICATE_FAIL:
            return getAuthenticateFailAction(state, action);
        case AuthActions.CLEAR_ERROR:
            return getClearErrorAction(state);
        default:
            return state;
    }
}
exports.authReducer = authReducer;
function getAuthenticateSuccessAction(state, action) {
    var user = new user_model_1.User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
    return __assign(__assign({}, state), { user: user, authError: null, login: false });
}
function getLogoutAction(state) {
    return __assign(__assign({}, state), { user: null });
}
function getAuthenticateStartAction(state) {
    return __assign(__assign({}, state), { authError: null, loading: true });
}
function getAuthenticateFailAction(state, action) {
    return __assign(__assign({}, state), { user: null, authError: action.payload, loading: false });
}
function getClearErrorAction(state) {
    return __assign(__assign({}, state), { authError: null });
}

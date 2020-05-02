export class User {
  // tslint:disable-next-line:variable-name
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate) {
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}

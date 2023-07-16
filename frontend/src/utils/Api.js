class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status}`);
    }
  }

  _createHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    }

    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      headers["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`
    }

    return headers;
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + `/users/me`;
    return fetch(requestUrl, {
      headers: this._createHeaders(),
    }).then(this._checkResponse);
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._createHeaders(),
    }).then(this._checkResponse);
  }

  getDataFromServer() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  updateUserInfo(body) {
    const requestUrl = this._baseUrl + `/users/me`;
    return fetch(requestUrl, {
      method: 'PATCH',
      headers: this._createHeaders(),
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  addNewCard(body) {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      method: 'POST',
      headers: this._createHeaders(),
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  removeCard(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}`;
    return fetch(requestUrl, {
      method: 'DELETE',
      headers: this._createHeaders(),
    }).then(this._checkResponse);
  }

  addCardLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(requestUrl, {
      method: 'PUT',
      headers: this._createHeaders(),
    }).then(this._checkResponse);
  }

  deleteCardLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(requestUrl, {
      method: 'DELETE',
      headers: this._createHeaders(),
    }).then(this._checkResponse);
  }

  updateProfileAvatar(body) {
    const requestUrl = this._baseUrl + `/users/me/avatar`;
    return fetch(requestUrl, {
      method: 'PATCH',
      headers: this._createHeaders(),
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: `https://api.oksifoxy.mesto.nomoredomains.work`
});

export default api;

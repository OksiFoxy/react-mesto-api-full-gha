// about:"Исследователь гор"
// avatar:"https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg"
// cohort:"cohort-61"
// name:"Оксана"
// _id:"88e6e040d7851706746034a0"
// "likes": []

// Добавление карточек
// Использовать при добавлении по кнопке???
// POST 'https://mesto.nomoreparties.co/v1/cohort-61/cards'
// {
//   "likes": [],
//   "_id": "5d1f0611d321eb4bdcd707dd",
//   "name": "Байкал",
//   "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   "owner": {
//     "name": "Jacques Cousteau",
//     "about": "Sailor, researcher",
//     "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
//     "_id": "ef5f7423f7f5e22bef4ad607",
//     "cohort": "local"
//   },
//   "createdAt": "2019-07-05T08:10:57.741Z"
// },

import { token, cohort } from './apiConfig'

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + `/users/me`;
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getDataFromServer() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  updateUserInfo(body) {
    const requestUrl = this._baseUrl + `/users/me`;
    return fetch(requestUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  addNewCard(body) {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  removeCard(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}`;
    return fetch(requestUrl, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCardLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(requestUrl, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteCardLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(requestUrl, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateProfileAvatar(body) {
    const requestUrl = this._baseUrl + `/users/me/avatar`;
    return fetch(requestUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: `https://api.oksifoxy.mesto.nomoredomains.work/`,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

export default api;

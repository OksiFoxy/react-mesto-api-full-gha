const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

// const BASE_URL = 'https://auth.nomoreparties.co';
const BASE_URL = 'https://api.oksifoxy.mesto.nomoredomains.work';

const signUp = (email, password) => {
  const requestUrl = BASE_URL + '/signup';
  return fetch(requestUrl, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse);
}

const signIn = (email, password) => {
  const requestUrl = BASE_URL + '/signin';
  return fetch(requestUrl, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse);
}

const checkToken = (token) => {
  const requestUrl = BASE_URL + '/users/me';
  return fetch(requestUrl, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    },
  })
    .then(checkResponse);
}

export { signUp, signIn, checkToken };
